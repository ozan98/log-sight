import {getNumOfLevel} from '../util/analytic'

function UtilityBar( {logArr, filterByLevel, viewLog} ) {

    const levelNum = getNumOfLevel(logArr)

    return (
        <div className="utility-bar">
            {/* <p>Copy paste log here</p>
            <div className="log-view-input">
                <textarea onChange={(e) => viewLog(e)}>
                </textarea>
            </div> */}



            <div className="utility-buttons">
                <button onClick={() => filterByLevel('EXCEPTION')}>Exception {levelNum.exceptionCount}</button>
                <button onClick={() => filterByLevel('ERROR')}>Error {levelNum.errorCount}</button>
                <button onClick={() => filterByLevel('WARN')}>Warn {levelNum.warnCount}</button>
                <button onClick={() => filterByLevel('INFO')}>Info {levelNum.infoCount}</button>
                <button onClick={() => filterByLevel('DEBUG')}>Debug {levelNum.debugCount}</button>
            </div>
        </div>
    )
}

export default UtilityBar
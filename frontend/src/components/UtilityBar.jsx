import {getNumOfLevel} from '../util/analytic'

function UtilityBar( {logArr, filterByLevel} ) {

    const levelNum = getNumOfLevel(logArr)

    return (
        <div className="utility-bar">
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
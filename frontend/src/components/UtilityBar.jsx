import {getNumOfLevel} from '../util/analytic'

function UtilityBar( {logArr} ) {

    const levelNum = getNumOfLevel(logArr)

    return (
        <div className="utility-bar">
            {/* <div className="utility-buttons"> */}
                <button>Exception {levelNum.exceptionCount}</button>
                <button>Error {levelNum.errorCount}</button>
                <button>Warn {levelNum.warnCount}</button>
                <button>Info {levelNum.infoCount}</button>
                <button>Debug {levelNum.debugCount}</button>
            {/* </div> */}
        </div>
    )
}

export default UtilityBar
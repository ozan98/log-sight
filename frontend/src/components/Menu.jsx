import AddLogForm from './AddLogForm'
import LogTab from './LogTab'
import {useState} from 'react'

function Menu( {logList, setCurrectObservingLog, addLog} ) {

    const [addSelect, setAddSelect] = useState(false)

    const renderLogList = (logList) => {
        console.log(logList)
        return logList.map((log) => {
            return <LogTab name={log.logName} type={log.logType} setCurrent={setCurrectObservingLog} />
        })

    }

    const renderAddButton = () => {
        return <button onClick={() => setAddSelect(true)}>Add</button>
    }

    const renderAddForm = () => {
        return <AddLogForm addToList={addLog} toggleAddSelect={setAddSelect} />
    }

    return (
        <>
        <div className="logo">
            <h1>LOG SIGHT</h1>
        </div>

        <div className="log-list-container">
            <div className="add-Log-Container">
                {(addSelect) ? renderAddForm() : renderAddButton()}
            </div>
            <div className="log-list">
                {(logList.length !== 0) ? renderLogList(logList) : (console.log('empty fail'))}
            </div>
        </div>

        </>
    )
}

export default Menu
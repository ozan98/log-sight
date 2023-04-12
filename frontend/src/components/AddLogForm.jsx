import {useState} from 'react'

function AddLogForm( {addToList, toggleAddSelect} ) {
    const [logStr, setLogStr] = useState('')
    const [logType, setLogType] = useState('')
    const [logName, setLogName] = useState('')

    const addLogToList = () => {
        const log = {
            logName: logName,
            logtype: logType,
            logStr: logStr,
        }

        addToList(log)
        toggleAddSelect(false)
    }
    
    return (
        <div>
            <form onSubmit={addLogToList}>
                <label>Name</label>
                <input type="text" onChange={(e) => setLogName(e.target.value)}/>

                <label>Log type</label>
                <select name="log-type" id="log-type" onChange={(e) => setLogType(e.target.value)}>
                    <option>MS</option>
                    <option>DS</option>
                    <option>DSE</option>
                </select>

                <label>Paste log here</label>
                <textarea onChange={(e) => setLogStr(e.target.value)}>
                </textarea>

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddLogForm
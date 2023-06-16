import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addLog} from '../features/log/logSlice'
import {parse} from '../util/parser'


function AddLogForm( {toggleAddSelect} ) {
    const dispatch = useDispatch()
    const [logStr, setLogStr] = useState('')
    const [logType, setLogType] = useState('')
    const [logName, setLogName] = useState('')

    const addLogToList = () => {
        const logEntries = parse(logStr, logType)
        console.log(logEntries)

        const log = {
            logName: logName,
            logType: logType,
            logStr: logStr,
            logEntries: logEntries,
            filteredLog: [],
            logSnippet: [],

        }

        dispatch(addLog(log))
        toggleAddSelect(false)
    }
    
    return (
        <div>
            <form onSubmit={addLogToList}>
                <label>Name</label>
                <input type="text" onChange={(e) => setLogName(e.target.value)}/>

                <label>Log type</label>
                <select name="log-type" id="log-type" onChange={(e) => setLogType(e.target.value)}>
                    <option>TYPE</option>
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
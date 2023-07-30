import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addLog } from '../features/log/logSlice'
import { parse } from '../util/parser'
import { FaFileLines } from 'react-icons/fa6'
import { toast } from 'react-toastify'


function AddLogForm( {toggleAddSelect} ) {
    const dispatch = useDispatch()
    const [logStr, setLogStr] = useState('')
    const [logType, setLogType] = useState('')
    const [logName, setLogName] = useState('')

    const addLogToList = (e) => {
        e.preventDefault()

        if(logStr === '' || (logType === '' || logType ==='type') || logName === ''){
            toast.error('Please Enter The Valid fields', {
                position: 'top-right',
                theme: 'light',
            })
            
        } else {
            const logEntries = parse(logStr, logType)
            const log = {
                logName: logName,
                logType: logType,
                logStr: logStr,
                logEntries: logEntries,
                viewToggle: false,
    
            }
            toast.success('Succesfully Added a Log', {
                position: 'top-right',
                theme: 'light',
            })
            dispatch(addLog(log))
            toggleAddSelect(false)
        }
    }

    const cancelAddLog = () => {
        toggleAddSelect(false)
    }
    
    return (
        <div className="add-log-modal-bg">
            <div className="add-log-modal">
                <div className="add-log-header">
                    <FaFileLines id="log-icon"/>
                    <h1>ADD LOG</h1>
                </div>
                <div className="add-log-form">
                    <form onSubmit={addLogToList}>
                        <div className="add-log-form-input">
                            <label>Name:</label>
                            <input type="text" onChange={(e) => setLogName(e.target.value)}/>
                        </div>
                        <div className="add-log-form-input">
                            <label>Log type:</label>
                            <select name="log-type" id="log-type" onChange={(e) => setLogType(e.target.value)}>
                                <option>TYPE</option>
                                <option>MS</option>
                                <option>DS</option>
                                <option>DSE</option>
                            </select>
                        </div>
                        <div className="add-log-form-input">
                            <label>Paste log here:</label>
                            <textarea onChange={(e) => setLogStr(e.target.value)}>
                            </textarea>
                        </div>
                        <div className="add-log-form-buttons">
                            <div id="add-log-form-cancel-button" onClick={() => cancelAddLog()}><p>Cancel</p></div>
                            <button id="add-log-form-add-button" type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddLogForm
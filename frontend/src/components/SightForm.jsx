import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getFilteredLog } from '../util/analytic'
import LogView from './LogView'


function SightForm({ toggleSight }) {
    const [error, setError] = useState('false')
    const [exception, setException] = useState('false')
    const [timeStampStart, setTimeStampStart] = useState('')
    const [timeStampEnd, setTimeStampEnd] = useState('')
    const [keyWord, setKeyWord] = useState('')
    //TODO: state for module

    const [toggleLogView, setToggleLogView] = useState(false)


    const [filteredLog, setFilteredLog] = useState([])

    const { viewLogList } = useSelector((state) => state.log)


    const handlelogViewToggle = () => {
        if(toggleLogView === true){
            setToggleLogView(false)
        } else {
            setToggleLogView(true)
        }
    }

    const getDate = (date, period) => {
        if(date === ''){
            if(period === 'start') {
                return new Date(1000, 3, 3, 3, 3, 3, 3);
            } else {
                return new Date(3000, 3, 3, 3, 3, 3, 3);
            }
        }
        const [datePart, timePart] = date.split('T')
        const [year, month, day] = datePart.split('-')
        const [hour, minute, secondPart] = timePart.split(':')
        const [second, millisecond] = secondPart.split('.')
        console.log(second)
        console.log(millisecond)
        
        const newDate = new Date(year, month, day, hour, minute, second, millisecond)

        return newDate
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const sightConfig = {
            error: error === 'true' ? true : false,
            exception: exception === 'true' ? true : false,
            timeStampStart: getDate(timeStampStart, 'start'),
            timeStampEnd: getDate(timeStampEnd, 'end'),
            keyWord: keyWord
        }

        // console.log(getDate(timeStampStart, 'start'))
        console.log(getFilteredLog(sightConfig, viewLogList))
        // console.log(sightConfig)
        const filteredLog = getFilteredLog(sightConfig, viewLogList)

        setFilteredLog(filteredLog)
        handlelogViewToggle()

    }


    const SightForm = (
        <div className="sight-modal-bg">
            <div className="sight-modal">
                <div className="sight-form-header">
                    <h1>Sight</h1>
                </div>
                <div className="sight-form">
                    <form onSubmit={handleSubmit}>
                        {/* <div className="add-log-form-input">
                            <label>Name:</label>
                            <input type="text" onChange={(e) => setLogName(e.target.value)}/>
                        </div> */}
                        <div className="sight-form-input">
                            <label>Error:</label>
                            <select name="error-type" id="error-type" onChange={(e) => setError(e.target.value)}>
                                <option>false</option>
                                <option>true</option>
                            </select>
                        </div>
                        <div className="sight-form-input">
                            <label>Exception:</label>
                            <select name="exception-type" id="exception-type" onChange={(e) => setException(e.target.value)} >
                                <option>false</option>
                                <option>true</option>
                            </select>
                        </div>
                        <div className="sight-form-input">
                            <label>Timestamp:</label>
                            <div>
                                <label>Start</label>
                                <input type="datetime-local" step="0.001" onChange={(e) => setTimeStampStart(e.target.value)}/>
                                <label>End</label>
                                <input type="datetime-local" step="0.001" onChange={(e) => setTimeStampEnd(e.target.value)}/>
                            </div>
                        </div>
                        <div className="sight-form-input">
                            <label>Key word:</label>
                            <input type="text" onChange={(e) => setKeyWord(e.target.value)}/>
                        </div>
                        <div className="sight-form-input">
                            <label>Module:</label>
                            <select name="exception-type" id="exception-type" >
                                <option>Filler</option>
                                <option>Filler</option>
                                <option>Filler</option>
                            </select>
                        </div>
                        
                        <div className="sight-form-buttons">
                            <div id="sight-form-cancel-button" onClick={toggleSight}><p>Cancel</p></div>
                            <button id="sight-form-view-button" type="submit">View</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>        
    )

    return (
        <>
        {/* <div className="sight-modal-bg">
            <div className="sight-modal">
                <div className="sight-form-header">
                    <h1>Sight</h1>
                </div>
                <div className="sight-form">
                    <form onSubmit={handleSubmit}>
                        <div className="sight-form-input">
                            <label>Error:</label>
                            <select name="error-type" id="error-type" onChange={(e) => setError(e.target.value)}>
                                <option>false</option>
                                <option>true</option>
                            </select>
                        </div>
                        <div className="sight-form-input">
                            <label>Exception:</label>
                            <select name="exception-type" id="exception-type" onChange={(e) => setException(e.target.value)} >
                                <option>false</option>
                                <option>true</option>
                            </select>
                        </div>
                        <div className="sight-form-input">
                            <label>Timestamp:</label>
                            <div>
                                <label>Start</label>
                                <input type="datetime-local" step="0.001" onChange={(e) => setTimeStampStart(e.target.value)}/>
                                <label>End</label>
                                <input type="datetime-local" step="0.001" onChange={(e) => setTimeStampEnd(e.target.value)}/>
                            </div>
                        </div>
                        <div className="sight-form-input">
                            <label>Key word:</label>
                            <input type="text" onChange={(e) => setKeyWord(e.target.value)}/>
                        </div>
                        <div className="sight-form-input">
                            <label>Module:</label>
                            <select name="exception-type" id="exception-type" >
                                <option>Filler</option>
                                <option>Filler</option>
                                <option>Filler</option>
                            </select>
                        </div>
                        
                        <div className="sight-form-buttons">
                            <div id="sight-form-cancel-button" onClick={toggleSight}><p>Cancel</p></div>
                            <button id="sight-form-view-button" type="submit">View</button>
                        </div>
                    </form>
                </div>
            </div>
        </div> */}

        {toggleLogView ? <LogView logArr={filteredLog}/> : SightForm}
        </>
    )
}

export default SightForm


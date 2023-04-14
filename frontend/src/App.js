import Menu from './components/Menu'
import Dashboard from './components/Dashboard'
import {useState} from 'react'

function App() {
  const [logList, setLogList] = useState([])
  const [currentObservingLog, setCurrectObservingLog] = useState({
    logName: '',
    logtype: '',
    logStr: '',
  })

  // console.log(currentObservingLog)
  const addLog = (newLog) => {
    setLogList((prev) => [...prev, newLog])
    // console.log(newLog)
  }


  
  const setObservingLog = (logName) => {
    const currentLog = logList.filter((log) => log.logName === logName)

    const logToBeAdded = {
      logName: currentLog[0].logName,
      logType: currentLog[0].logType,
      logStr: currentLog[0].logStr
    }
    
    setCurrectObservingLog(logToBeAdded)
    console.log(currentObservingLog)
  }

  const renderDashboard = (currentLog) => {
    console.log(currentLog)
    return(currentLog === '') ? <Dashboard logString={''} /> : <Dashboard logString={currentLog} />
  }

  return(
    <main className="Main-app">
      <div className="log-nav">
        <Menu logList={logList} setCurrectObservingLog={setObservingLog} addLog={addLog}/>
      </div>

      <div className="dashboard">
        {/* <Dashboard/> */}
        {(currentObservingLog.logStr) ? renderDashboard(currentObservingLog.logStr) : renderDashboard('')}
        {/* <Dashboard logString={currentObservingLog.logStr} /> */}
      </div>
    </main>
  )
}

export default App;

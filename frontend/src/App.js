import Menu from './components/Menu'
import Dashboard from './components/Dashboard'
import {useState} from 'react'

function App() {
  const [logList, setLogList] = useState([])
  const [currentObservingLog, setCurrectObservingLog] = useState({
    logName: '',
    logtype: '',
    logStr: '',
    logEntries: [],
    filteredLog: [],
    logSnippet: [],
  })

  console.log(logList)

  const addLog = (newLog) => {
    setLogList((prev) => [...prev, newLog])
  }


  
  const setObservingLog = (logName) => {
    const currentLog = logList.filter((log) => log.logName === logName)

    const logToBeAdded = {
      logName: currentLog[0].logName,
      logType: currentLog[0].logType,
      logStr: currentLog[0].logStr,
      logEntries: currentLog[0].logEntries,
      filteredLog: currentLog[0].filteredLog,
      logSnippet: currentLog[0].logSnippet
    }
    
    setCurrectObservingLog(logToBeAdded)
  }

  const renderDashboard = (currentLog) => {
    console.log(currentLog)
    // return(currentLog === '') ? <Dashboard log={''} /> : <Dashboard logString={currentLog} />
    return <Dashboard log={currentLog} />
  }

  return(
    <main className="Main-app">
      <div className="logo">
            <h1>LOG SIGHT</h1>
        </div>
        
      <div className="menu-container">
        <Menu logList={logList} setCurrectObservingLog={setObservingLog} addLog={addLog}/>
      </div>

      <div className="dashboard">
        {/* <Dashboard/> */}
        {(currentObservingLog.logEntries !== 0) ? renderDashboard(currentObservingLog) : renderDashboard({logName: '', logStr: '', logType: ''})}
        {/* <Dashboard logString={currentObservingLog.logStr} /> */}
      </div>
    </main>
  )
}

export default App;

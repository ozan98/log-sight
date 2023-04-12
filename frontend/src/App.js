import Menu from './components/Menu'
import Dashboard from './components/Dashboard'
import {useState} from 'react'

function App() {
  const [logList, setLogList] = useState([])
  const [currentObservingLog, setCurrectObservingLog] = useState({})


  const addLog = (newLog) => {
    setLogList((prev) => [...prev, newLog])
    console.log(newLog)
  }

  const setObservingLog = (log) => {
    setCurrectObservingLog(log)
  }

  return(
    <main className="Main-app">
      <div className="log-nav">
        <Menu logList={logList} setCurrectObservingLog={setObservingLog} addLog={addLog}/>
      </div>

      <div className="dashboard">
        <Dashboard/>
      </div>
    </main>
  )
}

export default App;

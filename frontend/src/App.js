

// import React from 'react';
// import {useState, useEffect} from 'react'
// import {parse} from './util/LineParser'
// import {getNumOfError, getErrorLogs,getNumOfException, getExceptionLogs} from './util/analytic'
// import LogSnippet from './components/LogSnippet'
import Dashboard from './components/Dashboard'

function App() {
  // const [logStr, setLogStr] = useState(``)
  // const [logArr, setLogArr] = useState([])


  // useEffect(() => {
  //   const arr = parse(logStr)

  //   if(logStr.length > 1){
  //     setLogArr(arr)
  //   }
    
 
  // },[logStr])

  // return (
  //   <div className="App">
  //     <div>
  //         <textarea 
  //           onChange={(e) => setLogStr(e.target.value)}
  //         ></textarea>
  //       </div>
  //   <div className="dashboard">

  //     <div className="log-viewer">
  //       <LogSnippet logObj={logArr}/>
  //     </div>

      
  //     <div className="log-workbench">

  //       {<div className="error-logs">
  //         <LogSnippet logObj={getErrorLogs(logArr)}/>
  //       </div>}

  //       {<div className="exception-logs">
  //         <p>EXCEPTION logs: {getNumOfException(logArr)}</p>
  //         <LogSnippet logObj={getExceptionLogs(logArr)}/>
  //       </div>}

  //     </div>


  //   </div>  
  //   </div>
  // );

  return(
    <>
      <Dashboard/>
    </>
  )
}

export default App;

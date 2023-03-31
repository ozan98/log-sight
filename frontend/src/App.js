import React from 'react';
import {useState, useEffect} from 'react'
import {parse} from './util/LineParser'
import {getNumOfError, getErrorLogs} from './util/analytic'

function App() {
  const [logStr, setLogStr] = useState(``)
  const [logArr, setLogArr] = useState([])


  useEffect(() => {
    const arr = parse(logStr)

    if(logStr.length > 1){
      setLogArr(arr)
    }
    
 
  },[logStr])

  return (
    <div className="App">
      <h1>Log here</h1>
      <textarea
        onChange={(e) => setLogStr(e.target.value)}
        ></textarea>

      {<>
        <p>ERROR</p>
        <p>{getNumOfError(logArr)}</p>
      </>}

      {<>
        <p>ERROR logs</p>
        {getErrorLogs(logArr).map((log) => {
          return (
            <>
              <p>
                {log.timeStamp}
                {log.level}
                {log.module}
                {log.requestId}
                {log.lineNumber}
                {log.body}</p>
            </>
          )
        })}
      </>}



      {/* {(logArr.length) ? (
        logArr.map((line) => {
          return (
            <>
              <p key={line}>{line.timeStamp}</p>
              <p key={line}>{line.level}</p>
              <p key={line}>{line.module}</p>
              <p key={line}>{line.requestId}</p>
              <p key={line}>{line.lineNumber}</p>
              <p key={line}>{line.body}</p>
            </>
          )
        })
      ) : (<p>empty</p>)} */}

      {/* {logArr.map((line) => {
        return ( <> 
        <p>{line}</p> 
        <p> </p> 
        <p> </p> 

        <p> </p> 


        </>)
      })} */}
    </div>
  );
}

export default App;

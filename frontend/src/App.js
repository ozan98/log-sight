import React from 'react';
import {useState, useEffect} from 'react'
import {parse} from './util/LineParser'

function App() {
  const [log, setLog] = useState('')
  const [logArr, setLogArr] = useState([])
  const [logObj, setLogObj] = useState([])
  const regex = /^\[(.+)\] (\w+) \[(\w+)\] \[(.+)\] \((\d+)\): (.+)$/gm


  // const logArr = log.split(/\r?\n/)

  useEffect(() => {
    // setLogArr(log.split(/\r?\n/))
    setLogArr(log.split(regex))

    // parse(logArr)
    setLogObj(parse(logArr))
  
 
  },[log])

  return (
    <div className="App">
      <h1>Log here</h1>
      <textarea
        onChange={(e) => setLog(e.target.value)}
        ></textarea>


      {/* {logObj.map((line) => {
        return (
          <>
            <p key={line}>{line.timeStamp}</p>
            <p key={line}>{line.level}</p>
            <p key={line}>{line.module}</p>
            <p key={line}>{line.requestId}</p>
            <p key={line}>{line.lineNumber}</p>
            <p key={line}>{line.message}</p>
          </>
        )
      })} */}

      {logArr.map((line) => {
        return ( <> 
        <p>{line}</p> 
        <p> </p> 
        </>)
      })}
    </div>
  );
}

export default App;

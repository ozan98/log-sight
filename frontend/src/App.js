import React from 'react';
import {useState, useEffect} from 'react'
import {parse} from './util/LineParser'

function App() {
  const [logStr, setLogStr] = useState(``)
  const [logArr, setLogArr] = useState([])


  useEffect(() => {
    const arr = parse(logStr)
    setLogArr(arr)
 
  },[logStr])

  return (
    <div className="App">
      <h1>Log here</h1>
      <textarea
        onChange={(e) => setLogStr(e.target.value)}
        ></textarea>


      {/* {logArr.map((line) => {
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
      })} */}

      {logArr.map((line) => {
        return ( <> 
        <p>{line}</p> 
        <p> </p> 
        <p> </p> 

        <p> </p> 


        </>)
      })}
    </div>
  );
}

export default App;

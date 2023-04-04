import React from 'react';
import {useState, useEffect} from 'react'
import {parse} from '../util/LineParser'
import {getNumOfError, getErrorLogs,getNumOfException, getExceptionLogs} from '../util/analytic'
import LogSnippet from './LogSnippet'
import LogTable from './LogTable'


function Dashboard() {
  const [logStr, setLogStr] = useState(``)
  const [logArr, setLogArr] = useState([])
  const [snippetView, setSnippetView] = useState([])

  useEffect(() => {
    const arr = parse(logStr)

    if(logStr){
      setLogArr(arr)
    }
    
 
  },[logStr])

  const selectSnippet = (index) => {
      setSnippetView([])
      const snippetLine = logArr.filter((line) => line.index === index)
      console.log(snippetLine)
    
      setSnippetView(snippetLine)

  }

  return (
    <div className="dashboard">
        
        <div className="log-nav">

        </div>

        <div className="log-view-container">
            <div className="log-view-input">
                <textarea onChange={(e) => setLogStr(e.target.value)}>

                </textarea>
            </div>

            <div className="log-view">
                 <LogTable logArr={logArr} getSnippet={selectSnippet}/>
            </div>

            <div className="log-snippet">
                <LogSnippet logObj={snippetView} />
            </div>
        </div>

    </div>
  );
}

export default Dashboard;

import React from 'react';
import {useState, useEffect} from 'react'
import {parse} from '../util/LineParser'
import {getNumOfError, getErrorLogs,getNumOfException, getExceptionLogs} from '../util/analytic'
import LogSnippet from './LogSnippet'


function Dashboard() {
  const [logStr, setLogStr] = useState(``)
  const [logArr, setLogArr] = useState([])


  useEffect(() => {
    const arr = parse(logStr)

    if(logStr.length > 1){
      setLogArr(arr)
    }
    
 
  },[logStr])

  return (
    <div className="dashboard">
        <div className="log-viewer-container">

            <div className="log-input">
                <textarea 
                    onChange={(e) => setLogStr(e.target.value)}
                ></textarea>
            </div>

            <div className="log-viewer">
                <LogSnippet logObj={logArr}/>
            </div>


        </div>

        <div className="log-workbench">

            {<div className="error-log">
                <LogSnippet logObj={getErrorLogs(logArr)}/>
            </div>}

            {<div className="exception-log">
                <p>EXCEPTION logs: {getNumOfException(logArr)}</p>
                <LogSnippet logObj={getExceptionLogs(logArr)}/>
            </div>}

            


        </div>
    </div>
  );
}

export default Dashboard;

import React from 'react';
import {useState, useEffect} from 'react'
// import {parse} from '../util/LineParser'
import {parse} from '../util/parser'
import {filterByLevel} from '../util/analytic'
import LogSnippet from './LogSnippet'
import LogTable from './LogTable'
import UtilityBar from './UtilityBar'


function Dashboard( {log} ) {
  // const [logArr, setLogArr] = useState([])
  // const [filteredLog, setFilteredLog] = useState([])
  // const [snippetView, setSnippetView] = useState([])

  const {logStr, logType, logEntries, filteredLog, logSnippet } = log
  console.log(logStr)
  
  useEffect(() => {
    if(logStr !== ''){
      // const arr = parse(logStr, logType)
      // setLogArr(arr)
    }

    // if(filteredLog.length > 0)
      // setFilteredLog([])

    return () => {
      // setLogArr([])
    }

  },[log])

  const selectSnippet = (index) => {
      // setSnippetView([])
      const snippetLine = logEntries.filter((line) => line.index === index)
      // setSnippetView(snippetLine)
  }


  const viewLevel = (level) => {
    if(level === 'ALL'){
      // setFilteredLog([])
    }else {
      const filteredLog = filterByLevel(logEntries, level)
      // setFilteredLog(filteredLog)
    }
    
  }


  return (
    <>    
        <div className="log-view-container">

          <UtilityBar logArr={logEntries} filterByLevel={viewLevel}/>

  
            <div className="log-view">
              {/* {(filteredLog.length !== 0) ? 
                <LogTable logArr={filteredLog} getSnippet={selectSnippet} /> : 
                <LogTable logArr={logEntries} getSnippet={selectSnippet} />} */}

          
                <LogTable logArr={logEntries} getSnippet={selectSnippet} />
                
                
            </div>

            <div className="log-snippet">
                {/* <LogSnippet logObj={logSnippet} /> */}
            </div>
        </div>

    </>
  );
}

export default Dashboard;

import React from 'react';
import LogTable from './LogTable'
import {useSelector} from 'react-redux'


function LogView() {
 
  const {logStr, logType, logEntries, filteredLog, logSnippet} = useSelector((state) => state.log) 
  
  // console.log(logStr)
  return (
        
        <div className="log-view-container">
            <div className="log-view">
              {logEntries ? <LogTable logArr={logEntries} /> : null} 
            </div>
        </div>

  );
}

export default LogView;

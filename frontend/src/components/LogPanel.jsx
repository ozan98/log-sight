import { useState} from 'react';
import LogTable from './LogTable'
import {useSelector} from 'react-redux'
import {getNumOfLevel} from '../util/analytic'
import {getFilteredLog} from '../util/analytic'

import SightForm from './SightForm'



function LogPanel() {
  const [toggleSightForm, setToggleSightFrom] = useState(false)
  const {logList, viewLogList} = useSelector((state) => state.log)

  console.log(viewLogList)
  console.log(getFilteredLog({ error: true, exception: true },viewLogList))

  const handleSightFormToggle = () => {
    if(toggleSightForm === false) {
      setToggleSightFrom(true)
    } else{
      setToggleSightFrom(false)
    }
  }
  
   
  return (
        
        // <div className="log-view-container">
        //     <div className="log-view">
        //       {logEntries ? <LogTable logArr={logEntries} /> : null} 
        //     </div>
        // </div>
        <div className="panel-inner-container">
          <div className="panel-sight-bar-container">
              <div className="panel-sight-bar-inner-container">
                <button id="sight-button" onClick={handleSightFormToggle}>Sight</button>
              </div>
            </div>
          <div className="short-panel-container">
            <div className="single-short-panel">
                <p>Number of Errors: {getNumOfLevel(viewLogList).errorCount}</p>
                <p>Number of Exceptions: {getNumOfLevel(viewLogList).exceptionCount}</p>
            </div>
            <div className="single-short-panel">
                <p>{getNumOfLevel(viewLogList).errorCount}</p>
                <p>{getNumOfLevel(viewLogList).exceptionCount}</p>
            </div>
          </div>
          <div className="long-panel-continer">
            <div className="single-long-panel">
                  <p>{getNumOfLevel(viewLogList).errorCount}</p>
                  <p>{getNumOfLevel(viewLogList).exceptionCount}</p>
            </div>
          </div>

          {toggleSightForm ? <SightForm toggleSight={handleSightFormToggle} /> : ''}
        </div>

  );
}

export default LogPanel

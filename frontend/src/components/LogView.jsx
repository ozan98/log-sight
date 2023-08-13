import ansi from 'ansi-escape-sequences'

function LogView( {logArr, handleToggle} ) {
    const renderRow = (logs) => {
        return logs.map((row) => {
            return(
                <div className="log-view-row">
                    {/* <div className="log-view-row-index">{`${row.index}`}</div> */}
                    <div>
                        <span>{`${row.timeStamp.day}`}</span>
                        <span>{`${row.timeStamp.month}`}</span>
                        <span>{`${row.timeStamp.year}`}</span>
                        <span>{`${row.timeStamp.time} `}</span>
                        <span>{`${row.level} `}</span>
                        <span>{`${row.module} `}</span>
                        <span>{`${row.requestId} `}</span>
                        <span>{`${row.lineNumber}`}</span>
                        <span className="row-body">{`${row.body} `}</span>
                    </div>
                    
                </div>
            )
        })
    }

    return(
        <div className="log-view-modal-bg">
            <div className="log-view-modal">
                <div className="log-view-header">
                    <h1>Log View</h1>
                    <button onClick={handleToggle}>Cancel</button>
                </div>
                <div className='log-view-logs'>
                    {renderRow(logArr)}
                </div>
            </div>
        </div>
    )
}

export default LogView
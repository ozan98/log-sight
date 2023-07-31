import ansi from 'ansi-escape-sequences'

function LogView( {logArr} ) {
    const renderRow = (logs) => {
        return logs.map((row) => {
            return(
                <div className="log-view-row">
                    <div className="log-view-row-index">{`${row.index}`}</div>
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
                {renderRow(logArr)}
            </div>
        </div>
    )
}

export default LogView
import ansi from 'ansi-escape-sequences'

function LogTable( {logArr} ) {
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
        // <>
        // {
        //     logArr.map((log) => {
        //         return(
        //             // <div className="table-row">
        //             <tr key={log.index} onClick={() => getSnippet(log.index)}>
        //                 <td className="index numbering">{log.index}</td>
        //                 <td className="time-stamp">{log.timeStamp.day}{log.timeStamp.month}{log.timeStamp.year}</td>
        //                 <td className="time-stamp">{log.timeStamp.time}</td>
        //                 <td className="level">{log.level}</td>
        //                 <td className="module">{log.module}</td>
        //                 <td className="request-id">{log.requestId}</td>
        //                 <td className="line-number">{log.lineNumber}</td>
        //                 <td className="body">{log.body}</td>
        //             </tr>
        //             // </div>
        //         )
        //     })
        // }
        // </>
        <>
            {renderRow(logArr)}
        </>
    )
}

export default LogTable
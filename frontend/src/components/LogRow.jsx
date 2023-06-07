import ansi from 'ansi-escape-sequences'

function LogTable( {logArr, getSnippet} ) {
    const renderRow = (logs) => {
        return logs.map((row) => {
            return(
                <div>
                    <span>{`${row.index}`}</span>
                    <span>{`${row.timeStamp.day}`}</span>
                    <span>{`${row.timeStamp.month}`}</span>
                    <span>{`${row.timeStamp.year}`}</span>
                    <span>{`${row.timeStamp.time} `}</span>
                    <span>{`${row.level} `}</span>
                    <span>{`${row.module} `}</span>
                    <span>{`${row.requestId} `}</span>
                    <span>{`${row.lineNumber}`}</span>
                    <span>{`${row.body} `}</span>

                        
                    
                    {/* {`${row.timeStamp.day}${row.timeStamp.month}${row.timeStamp.year}${row.timeStamp.time} ${row.level} ${row.module} ${row.requestId} ${row.lineNumber}${row.body}`} */}
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
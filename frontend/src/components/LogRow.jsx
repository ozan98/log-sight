

function LogTable( {logArr, getSnippet} ) {
    return(
        <>
        {
            logArr.map((log) => {
                return(
                    // <div className="table-row">
                    <tr key={log.index} onClick={() => getSnippet(log.index)}>
                        <td className="index numbering">{log.index}</td>
                        <td className="time-stamp">{log.timeStamp.day}{log.timeStamp.month}{log.timeStamp.year}</td>
                        <td className="time-stamp">{log.timeStamp.time}</td>
                        <td className="level">{log.level}</td>
                        <td className="module">{log.module}</td>
                        <td className="request-id">{log.requestId}</td>
                        <td className="line-number">{log.lineNumber}</td>
                        <td className="body">{log.body}</td>
                    </tr>
                    // </div>
                )
            })
        }
        </>
    )
}

export default LogTable


function LogTable( {logArr, getSnippet} ) {
 console.log(logArr)
 console.log(() => getSnippet(2))

    return(
        <>
        {
            logArr.map((log) => {
                return(
                    // <div className="table-row">
                    <tr onClick={() => getSnippet(log.index)}>
                        <td>{log.index}</td>
                        <td>{log.timeStamp.day}{log.timeStamp.month}{log.timeStamp.year}</td>
                        <td>{log.timeStamp.time}</td>
                        <td>{log.level}</td>
                        <td>{log.module}</td>
                        <td>{log.requestId}</td>
                        <td>{log.lineNumber}</td>
                        <td>{log.body}</td>
                    </tr>
                    // </div>
                )
            })
        }
        </>
    )
}

export default LogTable
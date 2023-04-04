

function LogTable( {logArr} ) {
 console.log(logArr)
    return(
        <>
        {
            logArr.map((log) => {
                return(
                    // <div className="table-row">
                    <tr>
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
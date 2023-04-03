

function LogTable( {logArr} ) {
 console.log(logArr)
    return(
        <>
        {
            logArr.map((log) => {
                return(
                    <tr>
                        <th>{log.timeStamp.day}{log.timeStamp.month}{log.timeStamp.year}</th>
                        <th>{log.timeStamp.time}</th>
                        <th>{log.level}</th>
                        <th>{log.module}</th>
                        <th>{log.requestId}</th>
                        <th>{log.lineNumber}</th>
                        <th>{log.body}</th>
                    </tr>
                )
            })
        }
        </>
    )
}

export default LogTable
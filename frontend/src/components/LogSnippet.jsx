
function LogSnippet( {logObj} ) {
    console.log(logObj)
    return(
        <textarea 
            value={
                logObj.map((log) => {
                    return (
                        `${log.timeStamp} ${log.level} ${log.module} ${log.requestId} ${log.lineNumber}${log.body}`
                    )
                })
            }>
        </textarea>
    )
}

export default LogSnippet
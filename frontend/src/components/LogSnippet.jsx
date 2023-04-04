
function LogSnippet( {logObj} ) {
    const getLogObjAsString = (obj) => {
        let string = ''
        obj.map((log) => {
            string = string + log.timeStamp.timeStamp + ' ' + log.level + ' ' + log.module + ' ' + log.requestId + ' ' + log.lineNumber + log.body
        })

        return string
    }

    return(
        <textarea 
            value={
                // logObj.map((log) => {
                //     return (
                //     'hi'
                //     )
                // })\
                getLogObjAsString(logObj)
            }>
        </textarea>


        // <>
        //     {
        //         logObj.map((log) => {
        //             return(
        //                 <>
        //                     {log.timeStamp} {log.level} {log.module} {log.requestId} {log.lineNumber}{log.body}
        //                 </>
        //             )
        //         })
        //     }
        // </>
    )
}

export default LogSnippet
const parse = (arr) => {
    const timeStampRegex = /^\[(.+)\] (\w+) \[(\w+)\] \[(.+)\] \((\d+)\): (.+)$/
    // const parsedObj = {
    //     timeStamp: '',
    //     logType: '',
    //     logFrom: '',
    //     logBody: ''
    // }

    const parsedLines = []

    for(let i = 0; i < arr.length; i++){
        let match = arr[i].match(timeStampRegex)
        if(match) {
            parsedLines.push({
                timeStamp: match[1],
                level: match[2],
                module: match[3],
                requestId: match[4],
                lineNumber: match[5],
                message: match[6]
            })
        } else{
            console.log(match)
            console.log(arr.length)
            // console.log(arr[i])
        }
        // parsedLines.push({
        //     hello: 'hello'
        // })
    }

    return parsedLines
    
}

module.exports = {
    parse
}
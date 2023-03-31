
const getTimeStamp = (str) => {
    const regex = /^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3})\]/
    const match = str.match(regex) || ['']
    return match[0] 
}

const getLogLevel = (str) => {
    const regex = /\b(DEBUG|INFO|WARN|ERROR|FATAL)\b/
    const match = str.match(regex)|| ['']
    return match[0]
}

const getModule = (str) => {
    const regex = /\[(\w+)\]/
    const match = str.match(regex)|| ['']
    return match[0]
}

const getRequestId = (str) => {
    const regex = /\[([a-f\d]{8}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{12})\]/
    const match = str.match(regex)|| ['']
    return match[0]
}

const getLineNumber = (str) => {
    const regex = /\((\d+)\):/
    const match = str.match(regex)|| ['']
    return match[0]
}

const getLogMessage = (str) => {
    // const regex = /\(\d+\):\s*(.*)$/
    // const regex = /:[^:]*:\s*(.*)$/
    // const regex =  /:\d+\)\s+([\s\S]*)/

    // const match = str.match(regex)|| ['']
    // console.log(match)
    // return match[1]
    let newStr = str

    newStr = newStr.replace(/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3})\]/, '')
    newStr = newStr.replace(/\b(DEBUG|INFO|WARN|ERROR|FATAL)\b/, '')
    newStr = newStr.replace(/\[(\w+)\]/, '')
    newStr = newStr.replace(/\[([a-f\d]{8}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{12})\]/, '')
    newStr = newStr.replace(/\((\d+)\):/, '')


    console.log(str)
    return newStr
}


const parseToObjs = (arr) => {
    const logObjArr = []
    console.log(arr)
        for(let line of arr) {
            const logObj = {
                timeStamp: getTimeStamp(line),
                level: getLogLevel(line),
                module: getModule(line),
                requestId: getRequestId(line),
                lineNumber: getLineNumber(line),
                body: getLogMessage(line)
                }
                
            console.log('success')
            console.log(logObj)
            logObjArr.push(logObj)
            }

            console.log(logObjArr)
            return logObjArr
        }
            

const parse = (logStr) => {
    const regex = /(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3}\])/g;
    const matches = logStr.split(regex).filter(Boolean);

    let result = [];
    let entry = '';

    matches.forEach(match => {
    if (regex.test(match)) {
        if (entry) result.push(entry);
        entry = match;
    } else {
        entry += match;
    }
    });

    result.push(entry);

    // console.log(result);
    return parseToObjs(result)
}



module.exports = {
    parse
}
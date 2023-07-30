const parseDateHelper = (dateObject) => {
    const dateString = dateObject.dateObject.toString()

    const dateData = dateString.split(' ')
    
    const dateTimeArr = {
        dateObject: dateObject.dateObject,
        timeStampString: dateObject.timeStamp,
        year: dateData[3],
        month: dateData[1],
        day: dateData[2],
        time: dateData[4]
      }

    return dateTimeArr

}

const parseDate = (obj) => {
    if(obj.date === '') {
        return ''
    }

    const [datePart, timePart] = obj.date.split(' ')
    const [year, month, day] = datePart.split('-')
    const [hour, minute, secondPart] = timePart.split(':')
    const [second, millisecond] = secondPart.split('.')


    const dateObject = new Date(year, month, day, hour, minute, second, millisecond);
    
    
    return parseDateHelper({
        dateObject: dateObject,
        timeStamp: obj.timeStamp,
    })

}


const getTimeStamp = (str) => {
    const regex = /^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3})\]/
    const match = str.match(regex) || ['']
    let date = match[0]
    const timeStamp = match[0]

    date = date.replace('[', '')
    date = date.replace(']', '')
    
    const dateTimeObj = {
        date: date, 
        timeStamp: timeStamp,
    }

    const dateTime = parseDate(dateTimeObj)
    return dateTime
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

    let newStr = str

    newStr = newStr.replace(/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3})\]/, '')
    newStr = newStr.replace(/\b(DEBUG|INFO|WARN|ERROR|FATAL)\b/, '')
    newStr = newStr.replace(/\[(\w+)\]/, '')
    newStr = newStr.replace(/\[([a-f\d]{8}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{12})\]/, '')
    newStr = newStr.replace(/\((\d+)\):/, '')

    return newStr
}


const parseToObjs = (arr) => {
    console.log('MS parser')
    const logObjArr = []
    let index = 1
        for(let line of arr) {
            const logObj = { 
                index: getTimeStamp(line) === '' ? '' : index++,
                timeStamp: getTimeStamp(line),
                level: getLogLevel(line),
                module: getModule(line),
                requestId: getRequestId(line),
                lineNumber: getLineNumber(line),
                body: getLogMessage(line),
                }
                
            logObjArr.push(logObj)
            }
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

    return parseToObjs(result)

}



module.exports = {
    parse,
    parseToObjs
}
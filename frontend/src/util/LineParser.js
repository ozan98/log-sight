const parseDateHelper = (dateObject) => {
    const dateString = dateObject.dateObject.toString()

    const dateData = dateString.split(' ')
    console.log(dateData)
    
    const dateTimeArr = {
        timeStamp: dateObject.timeStamp,
        year: dateData[3],
        month: dateData[1],
        day: dateData[2],
        time: dateData[4]
      }

    console.log(dateTimeArr)
    return dateTimeArr

}

const parseDate = (obj) => {
    if(obj.date === '') {
        console.log(obj.date)
        console.log('uh oh')
        return ''
    }

    const [datePart, timePart] = obj.date.split(' ')
    const [year, month, day] = datePart.split('-')
    const [hour, minute, secondPart] = timePart.split(':')
    const [second, millisecond] = secondPart.split('.')
    console.log(year)
    console.log(month)
    console.log(day)
    console.log(hour)
    console.log(minute)
    console.log(second)
    console.log(millisecond)

    const dateObject = new Date(year, month, day, hour, minute, second, millisecond);
    
    console.log(dateObject)
    
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
    // console.log(typeof date)

    date = date.replace('[', '')
    date = date.replace(']', '')
    
    const dateTimeObj = {
        date: date, 
        timeStamp: timeStamp,
    }

    console.log(dateTimeObj)
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

    return newStr
}


const parseToObjs = (arr) => {
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
                
            // console.log('success')
            // console.log(logObj)
            logObjArr.push(logObj)
            }

            // console.log(logObjArr)
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


    //another implanemtation
    // logStr = logStr.split(/\n(?=\[\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}\.\d+\])/);
    // // This will split the log string into an array of logs based on the regular expression for the timestamp pattern

    // return parseToObjs(logStr)

}



module.exports = {
    parse
}
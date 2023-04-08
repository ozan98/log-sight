const getExceptionLogs = (arr) => {
    let exceptionLogs = []

    for(let e of arr) {
        if(e.body.includes('Exception')){
            exceptionLogs.push(e)
        }
    }

    return exceptionLogs
}

const getErrorLogs = (arr) => {
    let errorLogs = []

    for (let e of arr) {
        if(e.level === 'ERROR') {
            errorLogs.push(e)
        }
    }

    return errorLogs
}

const getNumOfException = (arr) => {
    let counter = 0

    for(let e of arr){
        if(e.body.includes('Exception')){
            counter++
        }
    }

    return counter
}

const getNumOfError = (arr) => {
    let counter = 0

    for(let e of arr) {
        if(e.level === 'ERROR') {
            counter++
        }
    }

    return counter
}

const getNumOfLevel = (arr) => {
    let errorCount = 0
    let warnCount = 0
    let infoCount = 0
    let debugCount = 0


    for(let line of arr) {
        if(line.level === 'ERROR')
            errorCount++
        if(line.level === 'WARN')
            warnCount++
        if(line.level === 'INFO')
            infoCount++
        if(line.level === 'DEBUG')
            debugCount++       
    }

    const numOfLevelObject = {
        exceptionCount: getNumOfException(arr),
        errorCount: errorCount,
        warnCount: warnCount,
        infoCount: infoCount,
        debugCount: debugCount,
    }

    return numOfLevelObject
} 


module.exports = {
    getNumOfError,
    getErrorLogs,
    getNumOfException,
    getExceptionLogs,
    getNumOfLevel,
}
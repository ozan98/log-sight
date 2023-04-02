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


module.exports = {
    getNumOfError,
    getErrorLogs,
    getNumOfException,
    getExceptionLogs
}
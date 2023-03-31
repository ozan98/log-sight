const getErrorLogs = (arr) => {
    let errorLogs = []

    for (let e of arr) {
        if(e.level === 'ERROR') {
            errorLogs.push(e)
        }
    }

    return errorLogs
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
    getErrorLogs
}
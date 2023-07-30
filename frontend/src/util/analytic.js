
const sortByTimeslot = (unSortedLog) => {

    unSortedLog = unSortedLog.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === unSortedLog.findIndex(obj => {
          return JSON.stringify(obj) === _value;
        });
      });

    for(let i = 1; i < unSortedLog.lenght; i++) {
        let current = unSortedLog[i].timeStamp.dateObject
        let j = i - 1
        while (j >= 0 && unSortedLog[i].timeStamp.dateObject > current) {
            unSortedLog[j + 1] = unSortedLog[j]
            j--;
        }
        unSortedLog[j + 1] = current
    }

    return unSortedLog
}

const getFilteredLog = (logFilter, logs) => {
    let unSortedLog = []



    for(let log of logs) {
        for(let logEntry of log.logEntries) {
            // if(logFilter.error){
            //     if(logEntry.level === 'ERROR'){
            //         unSortedLog.push(logEntry)
            //     }
            // }
            // if(logFilter.exception === true) {
            //     if(logEntry.body.includes('Exception') || logEntry.body.includes('exception')){
            //         unSortedLog.push(logEntry)
            //     }
            // }
            // if(logEntry.timeStamp.dateObject <= logFilter.timeStampStart || logEntry.timeStamp.dateObject >= logFilter.timeStampEnd){
            //     unSortedLog.push(logEntry)
            // }
            // if(logEntry.body.includes(logFilter.keyWord)) {
            //     unSortedLog.push(logEntry)
            // }

            // if(((logFilter.error) && logEntry.level === 'ERROR') &&
            //     ((logFilter.exception) && (logEntry.body.includes('Exception') || logEntry.body.includes('exception'))) &&
            //     ((logEntry.timeStamp.dateObject >= logFilter.timeStampStart) && (logEntry.timeStamp.dateObject <= logFilter.timeStampEnd))){
            //         unSortedLog.push(logEntry)
            //     }

            // console.log(logEntry.timeStamp.dateObject)
            if((logEntry.timeStamp.dateObject > logFilter.timeStampStart && logEntry.timeStamp.dateObject < logFilter.timeStampEnd)){
                if(logFilter.error === true && logFilter.exception === true && !logFilter.keyWord === ''){
                    if(logEntry.level === 'ERROR'){
                        unSortedLog.push(logEntry)
                    }
                    if(logEntry.level.includes('Exception') || logEntry.level.includes('exception')){
                        unSortedLog.push(logEntry)
                    }
                    if(logEntry.body.includes(logFilter.keyWord)){
                        unSortedLog.push(logEntry)
                    }
                }

                if(logFilter.error === true && logFilter.exception === false && logFilter.keyWord === ''){
                    if(logEntry.level === 'ERROR'){
                        unSortedLog.push(logEntry)
                    }
                }

                if(logFilter.error === false && logFilter.exception === true && logFilter.keyWord === ''){
                    if(logEntry.level.includes('Exception') || logEntry.level.includes('exception')){
                        unSortedLog.push(logEntry)
                    }
                }

                if(logFilter.error === false && logFilter.exception === false && logFilter.keyWord !== ''){
                    if(logEntry.body.toLowerCase().includes(logFilter.keyWord.toLowerCase())){
                        unSortedLog.push(logEntry)
                    }
                }

                if(logFilter.error === false && logFilter.exception === false && logFilter.keyWord === ''){
                    unSortedLog.push(logEntry)
                    
                }
            }

            
            
        }
    }

    return sortByTimeslot(unSortedLog)
}





const filterByLevel = (logArr, level) => {
    let levelFiltered = []

    for(let line of logArr){
        if(level === 'EXCEPTION'){
                if(line.body.includes('Exception'))
                    levelFiltered.push(line)
        }else {
            if(line.level === level)
                levelFiltered.push(line)
        }
    }
    
    return levelFiltered
}


const getNumOfLevel = (arr) => {
    let errorCount = 0
    let exceptionCount = 0

    for(let log of arr) {
        for(let logEntry of log.logEntries) {
            if(logEntry.level === 'ERROR'){
                errorCount++
            }
            if(logEntry.body.includes('Exception') || logEntry.body.includes('exception')) {
                exceptionCount++
            }
        }
    }

    return {
        errorCount,
        exceptionCount,
    }
}



// const getNumOfLevel = (arr) => {
//     let errorCount = 0
//     let warnCount = 0
//     let infoCount = 0
//     let debugCount = 0


//     for(let line of arr) {
//         if(line.level === 'ERROR')
//             errorCount++
//         if(line.level === 'WARN')
//             warnCount++
//         if(line.level === 'INFO')
//             infoCount++
//         if(line.level === 'DEBUG')
//             debugCount++       
//     }

//     const numOfLevelObject = {
//         exceptionCount: getNumOfException(arr),
//         errorCount: errorCount,
//         warnCount: warnCount,
//         infoCount: infoCount,
//         debugCount: debugCount,
//         allCount: (arr.length > 0) ? arr[arr.length - 1].index : 0
//     }

//     return numOfLevelObject
// } 


module.exports = {
    getNumOfLevel,
    getFilteredLog,
}

// export default {
//     getNumOfLevel,
//     filterByLevel,
// }
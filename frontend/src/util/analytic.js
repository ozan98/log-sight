const filterByTimeStamp = (timeStamp) => {

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

const getNumOfException = (arr) => {
    let counter = 0

    for(let e of arr){
        if(e.body.includes('Exception'))
            counter++
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
        allCount: (arr.length > 0) ? arr[arr.length - 1].index : 0
    }

    return numOfLevelObject
} 


module.exports = {
    getNumOfLevel,
    filterByLevel,
}

// export default {
//     getNumOfLevel,
//     filterByLevel,
// }
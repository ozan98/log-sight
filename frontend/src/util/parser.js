// import {parseToObjs} from './LineParser';
const {parseToObjs} = require('./msParser')
const {dseParseToObjs} = require('./dseParser')


const parse = (logStr, logType) => {
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

    console.log(logType)
   
    if(logType === 'MS'){
        return parseToObjs(result)
    } 

    return dseParseToObjs(result)
    

}

module.exports = {
    parse
}

// import {parseToObjs} from './LineParser';
const {parseToObjs} = require('./LineParser')


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

    // return parseToObjs(result)
   
    return parseToObjs(result)

}

module.exports = {
    parse
}

// import {parseToObjs} from './LineParser';
const { parseToObjs } = require('./msParser')
const { dseParseToObjs } = require('./dseParser');
const { dsParseToObjs } = require('./dsParser');


const parseMStoArray = (logStr) => {
    const regex = /(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3}\])/g;
    
    const matches = logStr.split(regex).filter(Boolean);

    let logEntries = [];
    let entry = '';

    matches.forEach(match => {
    if (regex.test(match)) {
        if (entry) logEntries.push(entry);
        entry = match;
    } else {
        entry += match;
    }
    });

    
    logEntries.push(entry);
  
    console.log(entry)
    console.log(String.raw`\ufeff`)

    return parseToObjs(logEntries)
}

const parseDStoArray = (logStr) => {
    const logEntries = [];
    let currentLogEntry = '';
    
    for (const line of logStr.split('\n')) {
      // If the line starts with a date and time, it's the start of a new log entry
      if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2},\d{3}/.test(line)) {
        if (currentLogEntry) {
          logEntries.push(currentLogEntry.trim());
        }
        currentLogEntry = line + '\n';
      } else {
        // If the line doesn't start with a date and time, it's a continuation of the previous log entry
        currentLogEntry += line + '\n';
      }
    }
    
    if (currentLogEntry) {
      logEntries.push(currentLogEntry.trim());
    }

    return dsParseToObjs(logEntries)
}



const parse = (logStr, logType) => {
    
    switch(logType) {
        case 'MS':
            return parseMStoArray(logStr);
        case 'DSE':
            return parseMStoArray(logStr);
    }

    return parseDStoArray(logStr)


    

}

module.exports = {
    parse
}

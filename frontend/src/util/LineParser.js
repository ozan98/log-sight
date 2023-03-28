const parse = (logStr) => {
    // const regex = /^\[(.+)\] (\w+) \[(\w+)\] \[(.+)\] \((\d+)\): (.+)$/gm

    // let matches
    // const parsedArr = []

    // while((matches = regex.exec(logStr)) !== null){
    //     parsedArr.push({
    //         timeStamp: matches[1],
    //         level: matches[2],
    //         module: matches[3],
    //         request: matches[4],
    //         lineNumber: matches[5],
    //         body: matches[6]
    //     })
    // }
    // console.log(logStr)
    // console.log(parsedArr)
    // return parsedArr



    // let arr = []
    // const regex = /\[\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}\.\d{3}\]/

    // arr = logStr.split(regex)

    // console.log(arr)

    // return arr


    // const regex = /\[\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}\.\d{3}\]/

    // const matches = logStr.match(regex)

    // console.log(matches)

    // return ["fjaskdfjhsaf","kfjsafjk"]

    // const regex = /\[\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}\.\d{3}\]/
    // const matches = logStr.match(regex);

    // let result = [];
    // let start = 0;

    
    // if(matches !== null){
    //     matches.forEach(match => {
    //         const index = logStr.indexOf(match, start);
    //         result.push(logStr.slice(start, index) + match);
    //         start = index + match.length;
    // });
    // } else {
    //     result.push('empty')
    // }
    

    // result.push(logStr.slice(start));

    // console.log(result);



    ////////////////////////////////

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

console.log(result);
    return result
}

module.exports = {
    parse
}
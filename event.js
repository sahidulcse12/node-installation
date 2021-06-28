// const _ = require('lodash');
// const path = require('path');
//const os = require('os');
//const fs = require('fs');
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

//console.log(_.last([1, 2, 3]));
//console.log(_.chunk(['a', 'b', 'c', 'd'], 3)) // array er vetor array...size 3 ta kore
//console.log(_.compact([0, 1, false, 2, '', 3]))

// const array = [1];
// const other = _.concat(array, 2, [3], [[4]]);
// console.log(other);





//const myPath = 'H:/sumit vai node/node-installation/index.js';

// console.log(path.basename(myPath))
// console.log(path.dirname(myPath))
//console.log(path.extname(myPath))
//console.log(path.isAbsolute(myPath))


// console.log(os.platform())
// console.log(os.freemem())
// console.log(os.homedir())
//console.log(os.arch())
//console.log(os.constants)
//console.log(os.cpus())
//console.log(os.endianness())
//console.log(os.tmpdir())


// synchronized way

// fs.writeFileSync('myFile.txt', 'hello programmers ')
// fs.appendFileSync('myFile.txt', 'how are you?')

// const data = fs.readFileSync('myFile.txt')
// console.log(data.toString())



//asynchronized way
// fs.writeFile('myFile.txt', 'hello node.js', (err, data) => {
//     //if (err) throw err;
//     console.log('The file has been saved!');
// })

// fs.readFile('myFile.txt', (err, data) => {
//     console.log(data.toString())
// })

// console.log('hello world!');



const School = require('./school');
const school = new School();


// register an events
school.on('bellRing', ({ period, text }) => {
    console.log(`event rising because ${period} ${text}`);
})

school.startPeriod();


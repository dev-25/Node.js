// Code1
const fs = require('fs')

fs.readFile('filee.txt', (a,b) => {
    if(a) return console.log(a);
    console.log(a);  
});


// Code2
const file = 'w.txt'
const errorFirstcallback = (a,b) => {
    if(b) {
        return console.log(b);
    }
    console.log('Function executed')
}

fs.readFile(file, errorFirstcallback);
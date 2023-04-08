
// Asynchronous 
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber >= 0.5) resolve(randomNumber);
        else reject(new Error('Promisee rejected'));
    }, 1000);
  });
 
myPromise
.then((result) => {
console.log(`Promise fulfilled with result: ${result}`);
})
.catch((ff) => {
console.error(`Promise rejected with error: ${ff}`);
});


// Synchronous
const add = (a,b) => {
    return new Promise((resolve, reject) => {
        let sum = a*b
        if (sum) resolve(sum)
        else reject(new Error('Not Possible'))
    });
}

add(1,'we')
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})
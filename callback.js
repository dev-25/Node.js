// Code1
function doSomethingAsync(value, callback) {
    setTimeout(function() {
        const result1 = Math.random();
        callback(result1*value);
    }, 5000);
};
  
doSomethingAsync(3, function(result) {
    console.log('The result is:', result);
});


// Code 2
function Name(value, callbackk){
    setTimeout(function(){
        callbackk('Devesh' + value);
    },4000);
};

Name('Sharma', function(result1){
    console.log(result1)
})


// Code3
const nname = (value,callback) =>{
    setTimeout(()=>{
        callback('Devesh'+value)
    },4000);
};

nname('Sharma',(fullname)=>{
    console.log(fullname)
})



// Code 4
// Code for synchronous Function
const add = (a,b,cb) => {
    const c  = a + b;
    cb(c);
}

add(1,2,(no) =>{
    console.log(no);
})

function getObject() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const myObject = {
        name: "Devesh Sharma",
        age: 22,
        location: "KoparKhairane"
    }; 
    resolve(myObject); 
    }, 1000);
  });
}

getObject()
.then((object) => {
    console.log(object);
})
.catch((error) => {
    console.error(error);
});
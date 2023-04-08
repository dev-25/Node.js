
const a = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            num = 12;
            const b = num*num;
            if (b) resolve (b);
            else reject (new Error('Wrong Data'))
        },1000);
    });
}

async function myFunction() {
    try {
        const data = await a();
        console.log(data);
    }catch (error) {
        console.error(error.message);
    }
}

myFunction();  
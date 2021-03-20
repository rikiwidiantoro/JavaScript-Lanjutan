// ASYNC AWAIT

// asynchronous function 
// adalah sebuah function yang bekerja secara asynchronous (melalui event loop), yang menghasilkan (implisit) promise sebagai return value nya, tapi cara penulisan code nya menggunakan penulisan yang synchronous (standard).

// 1. fungsi yang berjalan secara asynchronous
// 2. menghasilkan (implisit) promise
// 3. cara penulisannya sama seperti synchronous function (function biasa)

// adalah sebuah async function dapat memiliki keyword await di dalamnya untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promise nya selesai.

const coba = new Promise(resolve => resolve('selesai'));
console.log(coba);


const coba = new Promise(resolve => {
    setTimeout(() => {
        resolve('selesai');
    }, 2000);
    
});
// console.log(coba);
coba.then(() => console.log(coba));


// // menjalankan async await di dalam function
function cobaPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('selesai');
        }, 2000);
        
    });
} 
const coba = cobaPromise();
coba.then( coba => console.log(coba));

// dirubah ke async await  butuh sebuah function
async function cobaAsync() {
    const coba = await cobaPromise();
    console.log(coba);
}
cobaAsync();


// bagaimana kita melakukan error handling pada script error kita
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 6000;
        if ( waktu < 5000 ) {
            setTimeout(() => {
                resolve('selesai');
            }, waktu);
        } else {
            reject('kelamaan!');
        }
    });
} 
const coba = cobaPromise();
coba
    .then(coba => console.log(coba))
    .catch(coba => console.log(coba));   
    
async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch ( err ) {
        console.error(err);
    }
    
}
cobaAsync();

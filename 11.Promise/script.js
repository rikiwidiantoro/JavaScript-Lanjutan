// PROMISE
// sebuah solusi untuk menangani callback hell di video sebelumnya


// // simpel | menggunakan library jquery
$.ajax({
    url: 'http://www.omdbapi.com/?apikey=91d09eeb&s=avengers',
    success: movies => console.log(movies)
});



// // ajax versi vanila javascript
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.response));
        }
    } else {
        console.log(xhr.responseText);
    }
}
xhr.open('get', 'http://www.omdbapi.com/?apikey=91d09eeb&s=avengers');
xhr.send();



// // di javascript modern ada cara yang lebih simpel | menggunakan fetch
const movie = fetch('http://www.omdbapi.com/?apikey=91d09eeb&s=avengers');
console.log(movie); // tapi yang dikembalikan bukan data film nya | tapi bentuk nya promise | fetch simpel hanya satu baris tapi bentuknya promise


// // kalau mau lihat isi film nya | hasilnya sama menggunakan ajax jquery dan ajax vanilla javascript | hanya satu baris >> masalahnya fetch menggembalikan promise
fetch('http://www.omdbapi.com/?apikey=91d09eeb&s=avengers')
    .then(response => response.json())
    .then(response => console.log(response));




// bahas promise
// adalah sebuah object yang merepresentasikan keberhasilan atau kegagalan dari sebuah event yang asynchronous, yang akan terjadi di masa datang
// janji >> (terpenuhi / ingkar)
// state >> (fulfilled / rejected / pending)
// untuk menjalankan ada 3 fungsi callback (resolve / reject / finally)
// aksi (then / catch)
// promise digunakan biasanya untuk request ke API

// // contoh sederhana
let ditepati = false;
const janji1 = new Promise((resolve, reject) => {
    if (ditepati) {
        resolve('janji telah ditetapi');
    } else {
        reject('ingkar janji');
    }
}) ;

janji1
    .then(response => console.log('OK! : ' + response))
    .catch(response => console.log('NOT OK! : ' + response));


// // contoh 2 janji nya menunggu proses atau pending
let terpenuhi = true;
const janji2 = new Promise((resolve, reject) => {
    if ( terpenuhi ) {
        setTimeout(() => {
            resolve('janji telah terpenuhi tapi setelah beberapa waktu');
        }, 2000);
    } else {
        setTimeout(() => {
            reject('tidak terpenuhi setelah beberapa waktu');
        }, 2000);
    }
});

// // dibuat asynchronous
console.log('mulai');
// console.log(janji2
//     .then(() => console.log(janji2))
//     .catch(() => console.log(janji2)));

janji2
    .finally(() => console.log('selesai menunggu!')) // di berikan saat membuat animasi looding >> begitu mulai promisenya jalanin animasi looding >> ketika finally matiin animasinya.
    .then(response => console.log('OK! : ' + response))
    .catch(response => console.log('NOT OK! : ' + response));
console.log('selesai');



// di dalam promise ada method .all >> ketika kalian punya banyak promise dan ingin dijalankan sekaligus
// Promise.all
// akan conect ke dua API yang berbeda

// mengambil data film
const film = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Riki Widiantoro',
            pemeran: 'Widi, Anto, Toro'
        }])
    }, 1000);
});

// mengambil data cuaca
const cuaca = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Ponorogo',
            temperatur: 20,
            kondisi: 'Akan turun salju!'
        }])
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// pakai Promise.all
Promise.all([film, cuaca])
    // .then(response => console.log(response));
    // jika tidak ingin array di dalam array >> pakai spread operator
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });

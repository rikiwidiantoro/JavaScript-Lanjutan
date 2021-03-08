// // CALLBACK

// // adalah sebuah function yg dikirimkan sebagai parameter pada function yg lain.
// // adalah sebuah function yg dieksekusi setelah function lain selesai dijalankan.


// // contoh sederhana
// // synchronous callback
// function halo (nama) {
// 	alert(`Halo, ${nama}`);
// }

// function tampilkanPesan (callback) {
// 	const nama = prompt('Masukkan nama : ');
// 	callback(nama);
// }

// tampilkanPesan(halo);

// // bikin anonymous function
// function tampilkanPesan (callback) {
// 	const nama = prompt('Masukkan nama : ');
// 	callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// // yang dibutuhkan adalah pemahaman dari asynchronous callback


// // contoh berikutnya
// const mhs = [
// {
// 	"nama": "Riki Widiantoro",
// 	"nim": "1111",
// 	"email": "riki.com",
// 	"jurusan": "Teknik Informatika",
// 	"id": 1
// },
// {
// 	"nama": "Eren Yeager",
// 	"nim": "2222",
// 	"email": "Eren.com",
// 	"jurusan": "Teknik Mesin",
// 	"id": 2
// },
// {
// 	"nama": "Mikasa Ackerman",
// 	"nim": "3333",
// 	"email": "mikasa.com",
// 	"jurusan": "Teknik Elektro",
// 	"id": 3
// }
// ];

// // synchronous
// console.log('mulai');
// mhs.forEach(m => console.log(m.nama));
// console.log('selesai');

// // dibuat seolah-olah mengambil data nya lama
// console.log('mulai');
// mhs.forEach(m => {
// 	for ( let i = 0; i < 10000000; i++ ) {
// 		let date = new Date();
// 	}
// 	console.log(m.nama)
// });
// console.log('selesai');



// // asynchronous callback
// // ajax menggunakan vanilla javascript / javascript murni
// function getDataMahasiswa(url, success, error) {
// 	let xhr = new XMLHttpRequest();

// 	xhr.onreadystatechange = function() {
// 		if ( xhr.readyState === 4 ) {
// 			if ( xhr.status === 200 ) {
// 				success(xhr.response);
// 			} else if ( xhr.status === 404 ) {
// 				error();
// 			}
// 		}
// 	}
// 	xhr.open('get', url);
// 	xhr.send();
// }
// // harus punya function success & error
// getDataMahasiswa('mahasiswa.json', result => {
// 	console.log(JSON.parse(result));
// }, () => {

// });

// // menampilkan hanya nama
// console.log('mulai');
// getDataMahasiswa('mahasiswa.json', result => {
// 	const mhs = JSON.parse(result);
// 	mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('selesai');




// pakai jquery cdn
// pakai library eksternal
console.log('mulai');
$.ajax({
	url: 'mahasiswa.json',
	success: (mhs) => {
		// console.log(mhs);
		// // ambil nama
		mhs.forEach(m => console.log(m.nama));
	},
	error: () => {
		console.log(e.responseText);
	}
});
console.log('selesai');

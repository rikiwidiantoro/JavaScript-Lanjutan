// KONSEP this Pada ARROW FUNCTION

// contoh constructor function untuk membuat object pada javascript
// const Mahasiswa = function() {
// 	this.nama = 'Riki Widiantoro';
// 	this.umur = 22;

// 	this.Helo = function() {
// 		console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
// 	}
// }

// const Riki = new Mahasiswa();


// versi Arrow Function 
const Mahasiswa = function() {
	this.nama = 'Riki Widiantoro';
	this.umur = 22;

	// method yang bisa dirubah menjadi arrow function, constructor tidak bisa. karena arrow function tidak menyimpan konteks this
	this.Helo = () => {
		console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
	}
}

const Riki = new Mahasiswa();



// contoh dengan menggunakan object literal
const mhs1 = {
	nama: 'Riki',
	umur: 22,
	// sayHello: function() {
	// 	console.log(`Hello, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
	// }

	// dirubah ke arrow function
	sayHello: () => {
		console.log(`Hello, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
	}

	// hasil
	// mhs1.sayHello();
	// thisArrowFunction.js:40 Hello, nama saya undefined, umur saya undefined tahun.

	// arrow function tidak memiliki this akan mencari ke atas sampai window jika tidak ketemu
}


// contoh kasus constructor function diatas
// const Mahasiswaa = function() {
// 	this.namaa = 'Riki Widiantoro';
// 	this.umurr = 22;

// 	// karena constructor function mempunyai konsep this maka arrow function akan mencari diatasnya
// 	this.Helo = function() {
// 		console.log(`Halo, nama saya ${this.namaa}, umur saya ${this.umurr} tahun.`);
// 	}

// 	setInterval(() => {
// 		console.log(this.umurr++);
// 	}, 500);

// }

// const Rikii = new Mahasiswaa();




// contoh kasus box
const box = document.querySelector('.box');
box.addEventListener('click', function() {
	
	// mengurutkan kembali perubahan kotak
	let satu = 'size';
	let dua = 'caption';

	if (this.classList.contains(satu)) {
		[satu, dua] = [dua, satu];
	}

	this.classList.toggle(satu);

	// menggunakan arrow function
	setTimeout( () => {
		this.classList.toggle(dua);
	}, 600);

});

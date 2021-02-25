// PROTOTYPE

// melanjutkan code sebelumnya di function declaration
// pertama membuat atau mengubah function declaration menjadi constructor

// object pendukung
// const methodMahasiswa = {
// 	makan : function (porsi) {
// 		this.energi = this.energi + porsi;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	},

// 	main : function (kalori) {
// 		this.energi = this.energi - kalori;
// 		console.log(`Halo ${this.nama}, selamat bermain!`);
// 	},

// 	tidur : function (jam) {
// 		this.energi = this.energi + jam * 2;
// 		console.log('Halo ' + this.nama + ' selamat tidur!');
// 	}
// } 

// object utama
function Mahasiswa (nama, energi) {
	// let mahasiswa = {};
	// let mahasiswa = Object.create(methodMahasiswa);
	// let this = Object.create(Mahasiswa.prototype);

	this.nama = nama;
	this.energi = energi;

	// return mahasiswa;
	// return this;
}

Mahasiswa.prototype.makan = function (porsi) {
	this.energi = this.energi + porsi;
	return `Halo ${this.nama}, selamat makan!`;
}

Mahasiswa.prototype.main = function (kalori) {
	this.energi = this.energi - kalori;
	return `Halo ${this.nama}, selamat bermain!`
}

Mahasiswa.prototype.tidur = function (jam) {
	this.energi = this.energi + jam * 2;
	return `Halo ${this.nama}, selamat tidur!`
}

let Riki = new Mahasiswa('Riki', 10);
let Eren = new Mahasiswa('Eren', 100);

// konsep ini mirip dengan konsep class, maka dari itu di javascript konsep ini disebut dengan prototypel inheritance


// versi class
class vcMahasiswa {
	constructor (name, energy) {
		this.name = name;
		this.energy = energy;
	}

	eat (porsy) {
	this.energy = this.energy + porsy;
	return `Halo ${this.name}, selamat makan!`;
	}

	play (kalorie) {
		this.energy = this.energy - kalorie;
		return `Halo ${this.name}, selamat bermain!`
	}

	sleep (hour) {
		this.energy = this.energy + hour * 2;
		return `Halo ${this.name}, selamat tidur!`
	}
}

let Naruto = new vcMahasiswa ('Naruto', 10);
let Sasuke = new vcMahasiswa ('Sasuke', 100);

// dengan memahami prototype jadi lebih paham kalau menggunakan tipe data apapun pada javascript karena apapun yang ada di dalamnya itu object, pasti punya proto / prototype

let angka = [];
// dibelakang layar
let angka = new Array();

// dibelakang layar lagi
function Array() {
// dibelakang layar lagi lagi
	let this = Object.create(Array.prototype);
}

// array punya banyak prototype array lagi didalamnya
// dan juga object punya banyak proototype di dalamnya bahkan number juga dengan tipe data angka

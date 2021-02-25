// PROTOTYPE

// REVISITED >> mengulang atau mengingat kembali konsep object javascript pada javascript dasar


// cara membuat object :

// 1. object literal
let mahasiswa1 = {
	nama : 'Riki Widiantoro',
	energi : 10,
	makan : function (porsi) {
		this.energi = this.energi + porsi;
		console.log(`Halo ${this.nama}, selamat makan`)
	}
}

let mahasiswa2 = {
	nama : 'Eren Yeager',
	energi : 20,
	makan : function (porsi) {
		this.energi = this.energi + porsi;
		console.log(`Halo ${this.nama}, selamat makan`)
	}
}


// 2. function declaration
function Mahasiswa (nama, energi) {
	let mahasiswa = {};

	mahasiswa.nama = nama;
	mahasiswa.energi = energi;

	mahasiswa.makan = function (porsi) {
		this.energi = this.energi + porsi;
		console.log(`Halo ${this.nama}, selamat makan`);
	}

	mahasiswa.main = function (kalori) {
		this.energi = this.energi - kalori;
		console.log(`Halo ${this.nama}, selamat bermain`)
	}

	return mahasiswa;
}

let Riki = Mahasiswa('Riki', 10);
let Eren = Mahasiswa('Eren', 100);


// 3. constructor function (keyword new)
function Mhs (nama, energi) {
	
	this.nama = nama;
	this.energi = energi;

	this.makan = function (porsi) {
		this.energi = this.energi + porsi;
		console.log(`Halo ${this.nama}, selamat makan`);
	}

	this.main = function (kalori) {
		this.energi = this.energi - kalori;
		console.log(`Halo ${this.nama}, selamat bermain`)
	}

}

let Toro = new Mhs('Toro', 10);
let Widi = new Mhs('Widi', 100);

// ini yang akan kita gunakan untuk kedepannya kenapa? karena dengan menggunakan constructor function ini nanti akan memudahkan ketika membuat prototype dan juga akan lebih jelas ketika menggunakan object.create()


// 4. object.create()

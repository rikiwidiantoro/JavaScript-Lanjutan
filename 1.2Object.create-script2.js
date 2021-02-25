// PROTOTYPE

// REVISITED >> mengulang atau mengingat kembali konsep object javascript pada javascript dasar


// OBJECT.CREATE 
// melanjutkan code yang sebelumnya

// cara membuat object :

// 1. object literal
// problemnya tidak efektif untuk object yang banyak
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
// problem nya function tetap disimpan duplikatnya pada masing-masing object yang telah dibuat

// solusi function declaration yaitu dengan membuat object yang terpisah yang nantinya dipanggil dalam satu object utama

// method mahasiswa di simpan satu kali dalam memory, tapi problem selanjutnya adalah harus mengelola 2 object secara bersamaan, jika dibikin method baru di object pendukung, maka di object utama harus di tambahkan juga, dan sebliknya
// secara manajemen memory lebih efektif tapi harus ingat method-method yang ditambahkan dan dihapus

// cara yang lebih efektif yaitu dengan menggunakan object.create

// membuat object pendukung
const methodMahasiswa = {
	makan : function (porsi) {
		this.energi = this.energi + porsi;
		console.log(`Halo ${this.nama}, selamat makan!`);
	},

	main : function (kalori) {
		this.energi = this.energi - kalori;
		console.log(`Halo ${this.nama}, selamat bermain!`);
	},

	tidur : function (jam) {
		this.energi = this.energi + jam * 2;
		console.log('Halo ' + this.nama + ' selamat tidur!');
	}
} 

// object utama
function Mahasiswa (nama, energi) {
			// let mahasiswa = {};

	// Object.create() mirip dengan konsep pewarisan
	let mahasiswa = Object.create(methodMahasiswa);

	mahasiswa.nama = nama;
	mahasiswa.energi = energi;

	// tidak perlu lagi mendefinisikan method makan, minum dan tidur lagi

			// // menghubungkan object pendukung
			// mahasiswa.makan = methodMahasiswa.makan;
			// mahasiswa.main = methodMahasiswa.main;
			// // method setelah didaftarkan 
			// mahasiswa.tidur = methodMahasiswa.tidur;

	return mahasiswa;
}

let Riki = Mahasiswa('Riki', 10);
let Eren = Mahasiswa('Eren', 100);

// problem berikutnya adalah kerja nya dua kali yaitu membuat object pendukung untuk object utama,, solusinya yaitu dengan menggunakan prototype yang akan dilakukan di code berikutnya




// // 3. constructor function (keyword new)
// function Mhs (nama, energi) {
	
// 	this.nama = nama;
// 	this.energi = energi;

// 	this.makan = function (porsi) {
// 		this.energi = this.energi + porsi;
// 		console.log(`Halo ${this.nama}, selamat makan`);
// 	}

// 	this.main = function (kalori) {
// 		this.energi = this.energi - kalori;
// 		console.log(`Halo ${this.nama}, selamat bermain`)
// 	}

// }

// let Toro = new Mhs('Toro', 10);
// let Widi = new Mhs('Widi', 100);

// // ini yang akan kita gunakan untuk kedepannya kenapa? karena dengan menggunakan constructor function ini nanti akan memudahkan ketika membuat prototype dan juga akan lebih jelas ketika menggunakan object.create()

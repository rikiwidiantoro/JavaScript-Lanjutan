// MAP FILTER REDUCE

// contoh kasus bahan makanan : 
// MAP >> potong > telah terpotong / menghasilkan array baru,, sama dengan foreach tapi foreach tidak menghasilkan array baru
// FILTER >> sayur > saring atau pilih sesuai jenis
// REDUCE >> gabung > menghasilkan makanan utuh / menghasilkan array yang baru

const angka = [3, 5, 4, -1, 9, 8, 1, -9, 2, -2];

// FILTER
// mencari angka yang lebih besar sama dengan 3
// pakai for
const newAngka = [];

for ( let i = 0; i < angka.length; i++ ) {
	if (angka[i] >= 3) {
		newAngka.push(angka[i]);
	}
}
console.log(newAngka);

// pakai filter pakai function callback
// const newAngkaa = angka.filter(function (a) {
// 	return a >= 3;
// });
// console.log(newAngkaa);

// lebih ringkas pakai arrow function
const newAngkaa = angka.filter((a) => a >= 3);
console.log(newAngkaa);


// MAP > memetakan tiap tiap element di dalam array nya ke dalam fungsi yang baru
// array angka di kali 2 jadi array baru
const angkaBaru = angka.map(a => a * 2);
console.log(angkaBaru);


// REDUCE > untuk melakukan sesuatu pada element array nya
// array angka di jumlahkan semua
// reduce memiliki 2 argument : accumulator & currentValue,, dan harus menggunakan kurung dua (())
const angkaBaruu = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(angkaBaruu);

// ada nilai awal di (accumulator + currentValue, n) >> jika tidak di isi maka nilai default n = 0



// method Chaining >> bisa menggabungkan fungsi-fungsi higher order function ini ke dalam satu kali eksekusi, perlu di simpan ke dalam variabel terlebih dahulu
// cari angka > 5  >>  * 3  >>  jumlahkan
const hasil = angka.filter(a => a > 5) // 8,9
	.map(a => a * 3) // 24,27
	.reduce((accumulator, currentValue) => accumulator + currentValue); // 51
console.log(hasil);

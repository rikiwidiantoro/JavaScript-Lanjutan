// ARROW FUNCTION

// bentuk lain yang lebih ringkas dari function Expression


// function Expression
const tampilNama = function (nama) {
	return `Halo, ${nama}`;
}
console.log(tampilNama('Riki Widiantoro'));


// merubah menjadi arrow function
const tampilNamaa = (namaa) => {
	return `Haloo, ${namaa}`;
}
console.log(tampilNamaa('Toro'));


// jika parameter 2
const tampilNamaaa = (namaaa, waktu) => {
	return `Selamat ${waktu}, ${namaaa}`;
}
console.log(tampilNamaaa('Eren', 'Pagi'));


// jika parameternya cuma satu | tidak perlu kurung buka tutup, return, kurung kurawa teknik ini disebut implisit return
const tampilName = name => `Halo, ${name}`;
console.log(tampilName('Riki Widiantoro'));


// juka tanpa parameter wajib memakai kurung buka tutup nya
const halo = () => `Hello World`;
console.log(halo());



// contoh lain arrow function dengan menggunakan function map pada javascript untuk memetakan sebuah function ke dalam array
let mahasiswa = ['riki', 'widia', 'torong'];

// dengan function biasa
// let jmlHuruf = mahasiswa.map(function(nama) {
// 	return nama.length;
// });
// console.log(jmlHuruf);

// dengan arrow function
// let jmlHuruf = mahasiswa.map( nama => nama.length);
// console.log(jmlHuruf);

// mengembalikan object, buka array lagi
let jmlHuruf = mahasiswa.map( nama => ({
	nama: nama, jmlHuruf: nama.length}));
console.table(jmlHuruf);

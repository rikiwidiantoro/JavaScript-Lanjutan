// DESTRUCTURING ASSIGNMENT / VARIABLE

// merupakan expression pada javascript yang membuat kita dapat membongkar nilai array atau properti dari object ke dalam variabel yang terpisah.

// penggunaan sederhana nya


// destructuring ARRAY
const perkenalan = ['Halo', 'nama', 'saya', 'Riki Widiantoro'];

// cara biasa
const salam = perkenalan[0];
const nama = perkenalan[1];
const saya = perkenalan[2];
const riki = perkenalan[3];
console.log(salam, nama, saya, riki);

// pakai destructuring array
const [salam, satu, dua, nama] = perkenalan;
console.log(nama);


// // cara melompati atau skip items >> dihapus item nya, koma (,) nya jangan
const [salam, , , nama] = perkenalan;
console.log(nama);


// swap atau menukar items
let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a,b] = [b,a]
console.log(a);
console.log(b);


// return value pada function
function coba() {
	return [1, 2];
}

const [a, b] = coba();
console.log(a);


// membongkar banyak nilai array tapi nggak tau elemen nya apa saja / rest parameter
const [a, ...n] = [1, 2, 3, 4, 5];
console.log(a);
console.log(n);




// destructuring OBJECT
const mhs = {
	nama: 'Riki Widiantoro',
	umur: 22,
	email: 'qwerty.com'
}

const {nama, umur} = mhs;
console.log(nama);


// assignment tanpa destructuring object
({nama, umur} = {nama: 'Riki Widiantoro', umur: 22});
console.log(nama);


// assignment ke variabel baru
const mhs = {
	nama: 'Riki Widiantoro',
	umur: 22,
	email: 'qwerty.com'
}

const {nama: n, umur: u} = mhs;
console.log(n);


// memberikan default value
const mhs = {
	nama: 'Riki Widiantoro',
	umur: 22
}

const {nama, umur, email = 'qwerty.com'} = mhs;
console.log(email);


// memberi nilai default + assignment ke variabel baru
const mhs = {
	nama: 'Riki Widiantoro',
	umur: 22
}

const {nama: n, umur: u, email: e = 'qwerty.com'} = mhs;
console.log(e);


// rest parameter / tidak tau di dalam object ada berapa properti dapat di tangkap dengan rest parameter
const mhs = {
	nama: 'Riki Widiantoro',
	umur: 22,
	email: 'qwerty.com'
}

const {nama, ...n} = mhs;
console.log(n);


// mengambil field pada object, setelah dikirim sebagai parameter function
const mhs = {
	id: 123,
	nama: 'Riki Widiantoro',
	umur: 22,
	email: 'qwerty.com'
}

function getIdMhs({id, nama}) {
	return id;
}

console.log(getIdMhs(mhs));

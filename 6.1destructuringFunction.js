// Destructuring Function

function penjumlahanPerkalian (a,b) {
	return [a + b, a * b];
}

// // tanpa destructuring
const jumlah = penjumlahanPerkalian(2,3)[0];
const kali = penjumlahanPerkalian(2,3)[1];
console.log(kali);


// // pakai destructuring
const [jumlah, kali] = penjumlahanPerkalian(2,3);
console.log(kali);


// // return value tambah
function kalkulasi (a,b) {
	return [a + b, a - b, a * b, a / b];
}

const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2,3); // urutan sangat berpengaruh
console.log(bagi);


// jika tidak ingin berpengaruh maka return value nya jangan array tapi object

function kalkulasii (a, b) {
	return {
		tambah: a + b,
		kurang: a - b,
		kali: a * b,
		bagi: a / b
	}
}

const {bagi, tambah, kali, kurang} = kalkulasii(2,3);
console.log(kurang);



// // destruncturing function arguments
const mhs1 = {
	nama: 'dody',
	umur: 12,
	email: 'qwerty.com'
}


// // // tanpa destructuring
// pakai function declaration biasa >> pecah di parameter
function cetakMhs(nama, umur) {
	return `Halo, nama saya ${nama} dan saya ${umur} tahun.`
}
console.log(cetakMhs(mhs1.nama, mhs1.umur));

// pakai object >> pecah di return value
function cetakMhs({mhs1}) {
	return `Halo, nama saya ${mhs1.nama} dan saya ${mhs1.umur} tahun.`
}
console.log(cetakMhs({mhs1}));


// // // pakai destructuring >>akan kepakai ketika object nya kompleks
function cetakMhs({nama, umur}) {
	return `Halo, nama saya ${nama} dan saya ${umur} tahun.`
}
console.log(cetakMhs(mhs1));



// // kasus yang lebih kompleks
const mhs1 = {
	nama: 'dody',
	umur: 12,
	email: 'qwerty.com',
	nilai: {
		tugas: 80,
		uts: 85,
		uas: 75
	}
}

// destructuring bersarang
function cetakMHS ({nama, umur, nilai: {tugas, uts, uas}}) {
	return `Halo, nama saya ${nama}, saya berumur ${umur} dan nilai uas saya adalah ${uas}.`
}
console.log(cetakMHS(mhs1));

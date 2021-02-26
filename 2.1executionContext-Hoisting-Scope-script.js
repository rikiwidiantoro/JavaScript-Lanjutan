//  EXECUTION CONTEXT, HOISTING, SCOPE

// 2 fase pada execution context
// 1. creation
// 2. execution

console.log(nama);
var nama = 'riki widiantoro';

// creation phase >> di context global

// nama var = undefined
// nama function = fn() tulisan function
// disebut hoisting
// window = global object
// this = window

// execution phase
// jalanin programnya


// contoh lain >> execution context dan hoisting
console.log(sayHello());

var nama = 'riki';
var umur = 22;

function sayHello () {
	return `Halo nama saya ${this.nama}, umur saya ${this.umur} tahun`;
}
// variabel di isi undefined
// function di isi isi dari functionnya

// function membuat local execution context 
// yg didalamnya sama terdapat creation dan execution phase
// akses local execution context : window dan argument 
// hoisting local


// contoh berikutnya
var nama = 'riki';
var username = 'riki_widian';

function cetakURL (username) {
	var instagramURL = 'http://instagram.com/';
	return instagramURL + username;
}
console.log(cetakURL(username));


// contoh kasus lagi
function a() {
	console.log('ini a');

	function b() {
		console.log('ini b');

		function c() {
			console.log('ini c');
		}
		c();

	}
	b();

}
a();


// kasus lagi
var nama = 'riki';
var username = 'riki_widian';

function cetakURL () {
	console.log(arguments);
	var instagramURL = 'http://instagram.com/';
	return instagramURL + username;
}

console.log(cetakURL('toro','tai'));


// latihan terakhir
function satu() {
	var nama = 'riki';
	console.log(nama);
}

function dua() {
	console.log(nama);
}

console.log(nama);
var nama = 'toro';
satu();
dua('tai');
console.log(nama);

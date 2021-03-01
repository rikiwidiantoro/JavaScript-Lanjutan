// HIGHER ORDER FUNCTION

// definisi >> function yang beroperasi pada function yang lain, baik itu digunakan dalam argument, maupun sebagai return value.
// karena dalam javascript itu sebuah function disebut dengan First Class Function yaitu inti dari javascript itu sebetulnya function dan diperlakukan sebagai object dalam javascript.

// function yang disimpan dalam argument disebut CALLBACK sedangkan function yang memiliki callback di argument nya disebut HIGHER ORDER FUNCTION.


// Kenapa higher order function?
// 1. Abstraksi >> untuk membuat agar kode yang dibuat lebih sederhana atau lebih simpel.
// contoh :
for (let i = 0; i < 10; i++) {
	console.log(i);
}
// kalau mau merubah angkanya kurang dinamis, maka dibutuhkan function
function repeatLog (n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}
repeatLog(10);
// kasus ini bisa dibuat lebih efektif lagi dengan higer order function
function repeat (n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}
}
repeat(10, console.log);
repeat(3, alert);

// 2. Functional Programming
// dengan melakukan pendekatan ke functional programming, karena javascript bukan merupakan bahasa emrograman functional murni tapi bisa dibuat menjadi seperti bahasa emrogramman functional, dan ketika mengguanakan paradigma ini dengan benar itu akan membuat program kita menjadi lebih efektif, lebih aman dan lebih efisien lagi.


// contoh higher order function
// Array.prototype.map()
// Array.prototype.filter()
// Array.prototype.reduce()

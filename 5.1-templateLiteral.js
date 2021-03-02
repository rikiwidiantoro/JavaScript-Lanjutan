// TEMPLATE LITERAL / TEMPLATE STRING

// adalah string literal yang memungkinkan adanya expression di dalamnya

 //string literal
// let nama = 'Riki';
// let nim = "18532969";
// let jurusan = `Teknik Informatika`; // back tick >> memungkinkan untuk membuat template literal dan bisa melakukan banyak hal :
// 1. multi-line string
// 2. embedded expression
// 3. HTML fragments
// 4. Expression interpolation
// 5. Tagged template

// contoh
// `string text` //string biasa

// `string text 1
//  string text 2 
//  string text 3` // multi-line string

//  `string text ${expression} string text` // embedded expression

//  tag `string text ${expression} string text` // tagged template



 // code
const nama = 'Riki Widiantoro';
const umur = 22;
console.log(`Halo nama saya ${nama}, saya berumur ${umur} tahun.`)

// embedded expression
console.log(`${10 * 2}`);
console.log(`${alert('halo')}`);

const x = 10;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`)

// HTML fragments
const mhs = {
	name: 'Eren Yeager',
	old: 22,
	nrp: 111111,
	email: 'qwerty@yy.com'
};
const el = `<div class="mhs">
<h2>Selamat Siang</h2>
<p>Hallo nama saya ${mhs.name}, saya berumur ${mhs.old} tahun.</p>
</div>`
console.log(el);

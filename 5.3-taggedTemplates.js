// TAGGED TEMPLATES

// bentuk yang lebih kompleks dari Template Literal, yang memungkinkan kita untuk membaca template literals melalui sebuah function.

// const nama = 'Riki Widiantoro';
// const umur = 22;

// // const str = `Hallo, nama saya ${nama} dan saya berumur ${umur} tahun.`;
// // console.log(str);

// // menjadikan template literal menjadi tagged templates
// // yaitu dengan cara menuliskan nama function di depan string nya dan nanti string template literal akan masuk seolah-olah sebagai parameter fungsi tadi
// function coba(string, ...values) { //tambah ... untuk tagged
// 		// cara biasa
// 	// let result = '';
// 	// string.forEach((str, i) => {
// 	// 	result += `${str}${values[i] || ''}`; //pakai OR untuk mengakali undefined
// 	// });
// 	// return result;

// 		// pakai reduce, higher order function
// 	return string.reduce((result, str, i) => `${result}${str}${values[i] || ''} `, '');
// }

// const str = coba `Hallo, nama saya ${nama} dan saya berumur ${umur} tahun.`;
// console.log(str);


// pertanyaannya ngapain kita lakukan hal diatas kalau hasilnya sama persis??..
// bayangkan contoh implementasi sederhana nya berikut
// misalkan kalian pengen menampilkan sebuah string hasil pencarian berdasarkan keyword tertentu, contoh kalian mencari berdasarkan nama, nah kalian pengen tampil hasil pencariannya dengan nama yg sudah kalian masukan itu sudah ada highlight nya, contoh nanti akan tampil nama RIKI, dan nanti ada background color nya, sehingga orang kalau melihat dimudahkan string nya tampil beikut highlight nya

// highlight
const nama = 'Riki Widiantoro';
const umur = 22;
const email = 'qwerty@com';

function highlight(string, ...values) { //tambah ... untuk tagged

	return string.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span> `, '');
}

const str = highlight `Hallo, nama saya ${nama} dan saya berumur ${umur} tahun. Dan email saya adalah ${email}`;
document.body.innerHTML = str;


// penggunaan lain tagged templates
// 1. escaping HTML Tags / sanitasi HTML tags >> untuk menghindari ketika ada script atau karakter yang tidak di inginkan pada halaman web kalian.
// 2. translation & internationalization >> alih bahasa dari website kalian.
// 3. styled components >> front-end framework

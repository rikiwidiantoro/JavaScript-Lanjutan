// REST PARAMETER

// adalah sesuatu yang merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array.

function myFunc (a, b, ...myArgs) {
	return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
}

console.log(myFunc(1,2,3,4,5));


// // tangkap semua parameter >> rest parameter hanya bisa digunakan di akhir dari argument
function myFunc (...myArgs) {
	return myArgs;
}

console.log(myFunc(1,2,3,4,5));

// // tanpa pakai rest parameter, yaitu dengan menggunakan arguments yang sudah ada pada function >> tapi harus di ubah dulu menjadi array agar bisa menggunakan method-method pada array
function myFunc (...myArgs) {
	return arguments;

	// // mengubah arguments menjadi array
	return Array.from(arguments);

	// // merubah pakai spread operator
	return[...myArgs];
}

console.log(myFunc(1,2,3,4,5));



// // menjumlahkan
function jumlahkan(...angka) {

	// // pakai for..of
	let total = 0;
	for ( const a of angka ) {
		total += a;
	}
	return total;

	// // pakai higher order function reduce
	return angka.reduce((a, b) => a + b);

}
console.log(jumlahkan(1,2,3,4,5));



// // menggunakan rest parameter saat melakukan array destructuring
const kel1 = ['Riki', 'Eren', 'Mikasa', 'Armin', 'Toro'];

// // // diatur setiap nama yg muncul pertama adalah ketua, yg muncul kedua adalah wakil, sisa nya adalah anggota.
const [ketua, wakil, ...anggota] = kel1;
console.log(anggota);



// // object destructuring
const tim = {
	pm: 'Riki',
	frontEnd1: 'Widi',
	frontEnd2: 'Toro',
	backEnd: 'Eren',
	ux: 'Mikasa',
	devOps: 'Armin'
}
const {pm, ...myTim} = tim;
console.log(myTim);



// // filtering
function filterBy(type, ...value) {
	return value.filter(v => typeof v === type); //pakai operator identitas agar tidak salah antara string satu dengan angka satu
}
console.log(filterBy('boolean', 1,2, 'Riki', false, 10, true, 'Toro'));

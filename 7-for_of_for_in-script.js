// FOR OF & FOR IN

// CARA KARJA LOOPING FOR OF & FOR IN

// for..of >> "create a loop iterating over iterable object." >> sebuah looping yang bisa mengulang atau menelusuri object-object yang iterable, seperti : string, array, arguments(menampung argumen-argumen pada function)/NodeList(ketika melakukan query pada DOM), TypedArray, Map, Set, User-defined iterables


// // ARRAY
const mhs = ['Riki', 'Widi', 'Toro'];

// // pengulangan biasa menggunakan for
for ( let i = 0; i < mhs.length; i++ ) {
	console.log(mhs[i]);
}

// // pakai method forEach >> jauh lebih simpel >> forEach khusus array
mhs.forEach(m => console.log(m));

// // pakai for..of
for ( m of mhs ) {
	console.log(m);
}


// // STRING >> me looping tiap-tiap karakter
const nama = 'Riki Widiantoro';

// // pakai for..of
for ( const n of nama ) {
	console.log(n);
}



const mhs = ['Riki', 'Widi', 'Toro'];

// // pakai foreach bisa
mhs.forEach((m,i) => {
	console.log(`${m} adalah mahasiswa ke ${i + 1}`);
});

// // pakai for..of tidak bisa,, harus di akali pakai method entries
for ( const [i, m] of mhs.entries() ) {
	console.log(`${m} adalah mahasiswa ke ${i + 1}`);
}


// // NODELIST
const liNama = document.querySelectorAll('.nama');

// // looping pakai forEach
liNama.forEach(a => console.log(a.textContent)); // bisa pakai innerHTML atau textContent

// pakai for..of
for ( const a of liNama ) {
	console.log(a.textContent); // bisa pakai innerHTML atau textContent
}


// // ARGUMENTS
function jumlahkanAngka() {
	// return arguments.reduce((a, i) => a + i); // arguments nggak bisa pakai reduce karena bukan array

	let jumlah = 0;
// 	// arguments.forEach(a => jumlah += a); // arguments pakai foreach tetap tidak bisa karena bukan array

// 	// pakai for..of >> bisa
	for ( a of arguments ) {
		jumlah += a;
	}
	return jumlah;

}

console.log(jumlahkanAngka(1,2,3,4,5));




// for..in >> "create a loop only iterating over enumerable" >> properti pada object

const mhs = {
	nama: 'Riki',
	umur: 22,
	email: 'qwerty.com'
}

// // pakai for..of tidak bisa looping object, tapi kalau array bisa
for ( m of mhs ) {
	console.log(m);
}

// // kalau pakai for..in bisa looping object
for ( m in mhs ) {
	console.log(m);
}

// // kalau mau mengambil value dari properti nya
for ( m in mhs ) {
	console.log(mhs[m]);
}

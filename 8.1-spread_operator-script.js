// SPREAD OPERATOR
// sebuah operator yang memecah (expand / unpack) sebuah iterables menjadi single element. >> iterables : string, array, nodelist, arguments, dll

const mhs = ['Riki', 'Widi', 'Toro'];

// // dipecah dengan ...
console.log(...mhs);
console.log(...mhs[0]);


// // kapan menggunakan spread operator ini?
// // 1. menggabungkan 2 array
const mhs = ['Riki', 'Widi', 'Toro'];
const dsn = ['Eren', 'Mikasa', 'Armin'];

// // spread operator lebih fleksibel bisa menambahkan value di tengah
const orang = [...mhs, 'aji', ...dsn];
console.log(orang);

// // cara lain dengan method array concat
const orang = mhs.concat(dsn);
console.log(orang);

// // meng-copy array
const mhs = ['Riki', 'Widi', 'Toro'];
const mhs1 = mhs;
mhs1[0] = 'fajar';
// // caranya agar array awal tetap, cuma yang baru yang berubah
const mhs1 = [...mhs];
mhs1[0] = 'fajar';
console.log(mhs1);


// // contoh lain pakai li
const liMhs = document.querySelectorAll('li');

// // jika ingin menampilkan value
console.log(liMhs[0].textContent);

// // NodeList dirubah ke array >> pakai looping for biasa
const mhs = [];
for ( let i = 0; i < liMhs.length; i++) {
	mhs.push(liMhs[i].textContent);
}
console.log(mhs);

// // pakai function map, sebelum itu di spread agar jadi array
const mhs = [...liMhs].map(m => m.textContent);
console.log(mhs);


// // kasus h1 membuat perhuruf membesar ketika krusor diarahkan
const nama = document.querySelector('.namas');
// // dipecah pakai spread & dibungkus tiap huruf dengan variabel atau properti span
const huruf = [...nama.textContent].map(h => `<span> ${h} </span>`).join(''); // di join agar jadi string
nama.innerHTML = huruf;


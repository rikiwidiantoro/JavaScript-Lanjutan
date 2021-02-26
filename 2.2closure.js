// CLOSURE


// cara bikin
function init() {
	// let nama = 'Riki Widiantoro';

	function tampilNama(nama) {
		console.log(nama);
	}
	return tampilNama;

}
let n = init();
n('Riki');


// kenapa menggunakan closure?
// 1. untuk membuat function factories
	function ucapkanSalam (waktu) {

		return function (nama) {
			console.log(`Halo ${nama}, Selamat ${waktu}, semoga hari mu menyenangkan!`);
		}

	}

	// factories function
	let selamatPagi = ucapkanSalam('Pagi');
	let selamatSiang = ucapkanSalam('Siang');
	let selamatMalam = ucapkanSalam('Malam');

	selamatPagi('Riki Widiantoro');
	selamatSiang('Riki Widiantoro');



// 2. untuk membuat private method
	

	let add = (function () {
		let counter = 0;
		return function () {
			return ++ counter;
		}
	})();

	counter = 100;

	console.log(add());
	console.log(add());
	console.log(add());

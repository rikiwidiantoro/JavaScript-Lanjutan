// LATIHAN 

// ambil semua element video
const elementVideo = Array.from(document.querySelectorAll('[data-duration]'));


// pilih hanya yg javascript lanjutan
let jsLanjutan = elementVideo.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))


// ambil durasi masing" video (string)
	.map(item => item.dataset.duration)


// ubah durasi menjadi float, ubah menit menjadi detik
	.map(waktu => {
		// 10:30 -> [10, 30] split
		const parts = waktu.split(':').map(part => parseFloat(part)); //dirubah dari string ke integer atau pecahan
		return parts[0] * 60 + parts[1];
	})


// jumlahkan semua detik
	.reduce((total, detik) => total + detik);


// ubah format jadi jam menit detik
const jam = Math.floor(jsLanjutan / 3600);

	// pakai pembulatan
	// floor >> pembulatan kebawah
	// siling >> pembulatan keatas
	// round >> pembulatan ke yang terdekat

jsLanjutan = jsLanjutan - jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = jsLanjutan - menit * 60;


// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} menit, ${detik} detik`;

const jmlhVideo = elementVideo.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const pJmlhVideo = document.querySelector('.jumlah-video');
pJmlhVideo.textContent = `${jmlhVideo} Video`;



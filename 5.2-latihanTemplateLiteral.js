// LATIHAN TEMPLATE LITERAL

// HTML Fragments
const mhs = {
	nama: 'Riki Widiantoro',
	umur: 22,
	nim: '18532969',
	email: 'qwerty@com'
};

const el = `<div class="mhs">
				<h2>${mhs.nama}</h2>
				<span>${mhs.nim}</span>
			</div>`;
// sisipkan ke body dengan DOM
document.body.innerHTML = el;


// kasus 2 looping >> mengulang data yg telah didapatkan
const mahasiswa = [
	{
		nama: 'Eren Yeager',
		nim: '1111'
	},
	{
		nama: 'Mikasa Ackerman',
		nim: '2222'
	},
	{
		nama: 'Armin alert',
		nim: '3333'
	}
];

const elemen = `<div class="mahasiswa">
					${mahasiswa.map(m => 
						`<ul>
							<li>${m.nama}</li>
							<li>${m.nim}</li>
						</ul>`).join('')}
				</div>`;
document.body.innerHTML = elemen;


// kasus 3 ternary
const lagu = {
	judul: 'Indonesia Raya',
	penyanyi: 'W.R Soepratman'
}

const e = 	`<div class="lagu">
				<ul>
					<li>${lagu.penyanyi}</li>
					<li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
				</ul>
			</div>`;
document.body.innerHTML = e;


// kasus 4 nested >> bikin HTML Fragments nya bersarang
const pelajar = {
	nama: 'Saitama',
	semester: 6,
	mataKuliah: [
		'Pemrograman Web',
		'Teknik Simulasi',
		'Praktikum Multimedia',
		'Mobile Aplication',
		'Rekayasa Protocol'
	]
}

// versi saya wkwk
// const fix = `<div class="pelajar">
// 				<h2>${pelajar.nama}</h2>
// 				<span> semester : ${pelajar.semester}</span>
// 				<h4>Mata Kuliah :</h4>
// 				<ul>
// 					<li>${pelajar.mataKuliah[0]}</li>
// 					<li>${pelajar.mataKuliah[1]}</li>
// 					<li>${pelajar.mataKuliah[2]}</li>
// 					<li>${pelajar.mataKuliah[3]}</li>
// 					<li>${pelajar.mataKuliah[4]}</li>
// 				</ul>
// 			</div>`;

function cetakMataKuliah(mataKuliah) {
	return `
		<ol>
			${mataKuliah.map(mk => 
					`<li>${mk}</li>`
				).join('')}
		</ol>
	`;
}


const fix = `<div class="pelajar">
				<h2>${pelajar.nama}</h2>
				<span> Semester : ${pelajar.semester}</span>
				<h4>Mata Kuliah :</h4>
				${cetakMataKuliah(pelajar.mataKuliah)}
			</div>`;


document.body.innerHTML = fix;

KONSEP ASYNCHRONOUS JAVASCRIPT

tujuan >> agar kedepannya tidak binggung ketika dihadapkan dengan teknik-teknik programming asynchronous pada javascript seperti Callback, Promise, Ajax, Async & Await.

definisi 
apa javascript (untuk orang awam) >>  adalah bahasa pemrograman tingkat tinggi dan dinamis yang secara umum dapat berjalan pada web browser.
javascript (untuk lanjutan) >> is a single-threaded, non-blocking, asynchronous and concurrent languange.


single-threaded >> javascript hanya dapat melakukan satu hal dalam satu waktu tertentu. >> javascript membaca baris per baris dan menyelesaikannya.
multi-threaded >> pekerjaannya dapat dibagi-bagi ke threaded yang berbeda-beda dalam satu waktu yang sama.
threaded >> urutan eksekusi kode yang dapat dilakukansecara bebas / independent satu sama lain.

blocking >> ketika mempunyai satu script pada saat dieksekusi ternyata membutuhkan waktu yg lama, ketika test 1 belum selesai maka dia nggak bisa masuk test berikutnya jadi menunggu dulu kalau sudah selesai baru bisa lanjut ke test berikutnya.
non-blocking >> walaupun pekerjaannya belum beres, kita bisa lanjut ke test berikutnya.

asynchronous >> misal mengerjakan test pertama dan belum beres tapi threaded nya bisa pindah ke test yang lain padahal test yg pertama belum selesai jadi dia pindah dulu, ketika test yg kedua belum selesai maka pindah lagi sampai akhirnya test satu selesai dan test dua selesai (asynchronous single-threaded).
synchronous >> seperti biasa.

asynchronous + single-threaded = concurrency
asynchronous + multi-threaded = parallelism


kesimpulan :
single vs multi threaded >> lingkungan eksekusi task
blocking vs non blocking >> teknik ngoding >> input output
synchronous vs asynchronous >> teknik ngoding >> http request
concurrent vs parallel >> lingkungan eksekusi task


didalam javascript ada mesin V8 engine yang ditanam di dalam web browser
didalam V8 ada :
HEAP >> untuk alokasi memori, tempat penyimpanan variabel, function, hoisting
STACK >> untuk pemanggilan function dan eksekusi script

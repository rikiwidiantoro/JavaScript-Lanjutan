// $('.search-button').on('click', function () {
    
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=91d09eeb&s=' + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search;
    
//             // di looping sebanyak jumlah film yang tampil
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m); // function-nya dibawah
//             });
//             $('.movie-container').html(cards);
    
//             // ketika tombol detail di klik
//             $('.modal-detail-button').on('click', function () { //kalau event handler jangan pakai arrow function, karena arrow function tidak punya scope this,, kalau pakai event handler kita butuh this-nya
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=91d09eeb&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetails = showDetails(m); // function-nya dibawah
//                         $('.modal-body').html(movieDetails);
//                     },
//                     error: (e) => {
//                         // jika error
//                         console.log(e.responseText);
//                     }
//                 });
//             });
    
//         },
//         error: (e) => {
//             // jika error
//             console.log(e.responseText);
//         }
//     });

// });




// // FETCH
// adalah sebuah API pada javascript modern yang tugasnya untuk mengambil data secara asynchronous atau ajax sama seperti melakukan XMLHttpRequest pada vanila javascript atau juga menggunakan method ajax pada jquery


// // konsep dan teori fetch
// "sebuah method pada API javascript untuk mengambil resources dari jaringan dan mengembalikan promise yang selesai (fullfilled) ketika ada response yang tersedia."

// // penulisan
// fetch(resources, init(konfigurasi tambahan))

// resources
// 1. URL >> alamat dari seumber yang kita ambil
// 2. Request Object >> sama seperti promise(object spesial yang di miliki javascript) >> representasi permintaan sumber

// init (optional)
// konfigurasi tambahan pada sebuah request berbentuk object >> sama seperti di jquery
// beberapa method : method, headers, body, mode, cache, referrer, referrerPolicy, integrity, keepalive, signal

// response
// hasil dari fetch, berupa promise >> ada properti dan method
// properti :
// headers, ok, redirected, status, statusText, type, url, body
// method :
// clone(), error(), redirect(), blob(), formData(), json(), text()



const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function() {

    const inputKeyword = document.querySelector('.input-keyword');

    fetch('http://www.omdbapi.com/?apikey=91d09eeb&s=' + inputKeyword.value)
        .then(response => response.json())
        .then(response => {

            const movies = response.Search;
            let cards = '';
            movies.forEach(m => cards += showCards(m)); // function nya dibawah


            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards;


            // ketika tombol detail di klik
            const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            modalDetailButton.forEach(btn => {
                btn.addEventListener('click', function () {
                    
                    // mengambil id film
                    const imdbid = this.dataset.imdbid;
                    
                    fetch('http://www.omdbapi.com/?apikey=91d09eeb&i=' + imdbid)
                        .then(response => response.json())
                        .then(m => {
                            const movieDetails = showDetails(m); // function-nya dibawah
                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = movieDetails;
                        });
                });
            });



        });

});







// function biar rapi
function showCards(m) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#MovieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showDetails(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                            <li class="list-group-item"><strong>Genre: </strong>${m.Genre}</li>
                            <li class="list-group-item"><strong>Runtime: </strong>${m.Runtime}</li>
                            <li class="list-group-item"><strong>Director: </strong>${m.Director}</li>
                            <li class="list-group-item"><strong>Plot: </strong><br>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}

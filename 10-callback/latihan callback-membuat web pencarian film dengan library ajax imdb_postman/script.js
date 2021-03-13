$('.search-button').on('click', function () {
    
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=91d09eeb&s=' + $('.input-keyword').val(),
        success: results => {
            const movies = results.Search;
    
            // di looping sebanyak jumlah film yang tampil
            let cards = '';
            movies.forEach(m => {
                cards += showCards(m); // function-nya dibawah
            });
            $('.movie-container').html(cards);
    
            // ketika tombol detail di klik
            $('.modal-detail-button').on('click', function () { //kalau event handler jangan pakai arrow function, karena arrow function tidak punya scope this,, kalau pakai event handler kita butuh this-nya
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=91d09eeb&i=' + $(this).data('imdbid'),
                    success: m => {
                        const movieDetails = showDetails(m); // function-nya dibawah
                        $('.modal-body').html(movieDetails);
                    },
                    error: (e) => {
                        // jika error
                        console.log(e.responseText);
                    }
                });
            });
    
        },
        error: (e) => {
            // jika error
            console.log(e.responseText);
        }
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
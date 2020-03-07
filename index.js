
document.addEventListener('DOMContentLoaded', function() {

    function renderMovies (movieArray) {

        var movieHTML = movieArray.map(function (currentMovie) {

            return `

            <div class="movie card m-2" style="width: 15rem;">
                <img class="card-img-top" src="${currentMovie.Poster}">
                    <div class="card-body">
                        <h2 class="card-title">${currentMovie.Title}</h2>
                        <h4 class="release-date">${currentMovie.Year}</h4>
                        <button class="btn btn-primary" name="addButton">Add</button>
                    </div>
            </div>

            `
        }).join('');

        return movieHTML;
    }
    var movieContainer = document.getElementById('movies-container');
    movieContainer.innerHTML = renderMovies(movieData);
})
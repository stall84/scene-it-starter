
document.addEventListener('DOMContentLoaded', function() {

    function renderMovies (movieArray) {

        var movieHTML = movieArray.map(function (currentMovie) {

            return `

            <div class="movie card m-2" style="width: 15rem;">
                <img class="card-img-top" src="${currentMovie.Poster}">
                    <div class="card-body">
                        <h3 class="card-title">${currentMovie.Title}</h3>
                        <h6 class="release-date">${currentMovie.Year}</h6>
                        <button class="btn btn-primary" name="addButton">Add</button>
                    </div>
            </div>

            `
        }).join('');

        return movieHTML;
    }

        document.getElementById('myForm').addEventListener('submit', function(e) {
            e.preventDefault()
            var movieContainer = document.getElementById('movies-container');
            movieContainer.innerHTML = renderMovies(movieData);
        })
    
})
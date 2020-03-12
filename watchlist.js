document.addEventListener('DOMContentLoaded', function() {

    localStorage.getItem('watchlist');

    //function addToWatchedList (imdbID) {


    //}



    function renderMovies (movieArray) {

        var movieHTML = movieArray.map(function (currentMovie) {
            // The fix to the 'poster object returning null' error was just to add an alternate image placeholder.
            return `

            <div class="movie card m-2" style="width: 15rem;">
                <img class="card-img-top" src="${currentMovie.Poster}" alt="movie poster">
                    <div class="card-body">
                        <h3 class="card-title">${currentMovie.Title}</h3>
                        <h6 class="release-date">${currentMovie.Year}</h6>
                        <button class="btn btn-primary" name="watchedButton" onclick="">I've watched already!</button>
                    </div>
            </div>

            `
        }).join('');

        return movieHTML;
    }

    var toWatchContainer = document.getElementById('toWatchContainer');
    toWatchContainer.innerHTML = renderMovies(JSON.parse(localStorage.getItem("watchlist")));
});
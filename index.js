// creating variable to hold the response.data.search from our axios get request at bottom of page. declared the variable
// in the outermost global scope so that I could have access to it in any of the functions.
var movieSearch; 

function saveToWatchlist(imdbID) {
    var movie = movieSearch.find(function (currentMovie) {
        return currentMovie.imdbID == imdbID
    });
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
    if (watchlist == null) {
        watchlist = [];
    };
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
    document.getElementById(imdbID).innerHTML = "Added!";

};

document.addEventListener('DOMContentLoaded', function () {

    function renderMovies(movieArray) {
        var movieHTML = movieArray.map(function (currentMovie) {
            return `
            <div class="movie card m-2" style="width: 15rem;">
                <img class="card-img-top" src="${currentMovie.Poster}">
                <div class="card-body">
                    <h3 class="card-title">${currentMovie.Title}</h3>
                    <h6 class="release-date">${currentMovie.Year}</h6>
                    <!--Code for button below required quotes in the onclick function template literal expression-->
                    <button class="btn btn-primary" name="addButton" id="${currentMovie.imdbID}" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</button>
                </div>
            </div>
            `
        }).join('');

        return movieHTML;
    }

    document.getElementById('myForm').addEventListener('submit', function (e) {
        e.preventDefault()

        var searchString = document.getElementById('search-bar').value;
        var urlEncodedSearchString = encodeURIComponent(searchString);
        console.log(urlEncodedSearchString);
        // using ES6 syntax on an axios/jquery get request to pull down the search results from the omdb ip. assign this query result to the global
        // variable moiveSearch we declared in the global scope at top 
        axios.get(`http://www.omdbapi.com/?apikey=62a1b7d1&s=${urlEncodedSearchString}`).then(response => {var movieContainer = document.getElementById('movies-container');
        movieSearch = response.data.Search;
        movieContainer.innerHTML = renderMovies(response.data.Search);});


        
    })

});
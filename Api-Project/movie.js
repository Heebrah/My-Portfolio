const apiUrl = 'http://www.omdbapi.com/';
const apiKey = '61d5b70f';

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const movieList = document.getElementById('movie-list');
const movieDetails = document.getElementById('movie-details');
const movieContainer = document.getElementById('image-container')


searchButton.addEventListener('click', searchMovie);

window.addEventListener('keydown', ()=>{
    if (event.key === "Enter") {
    searchMovie()
}
})

//


function searchMovie() {
    movieContainer.innerHTML = ''
     movieDetails.innerHTML = ''
   
    const searchTerm = searchInput.value;
    searchInput.value = ''
    
    if (searchTerm.trim() !== '') {
        fetch(`${apiUrl}?apikey=${apiKey}&s=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === 'True') {
                    displayMovies(data.Search);
                } else {
                    movieList.innerHTML = '<p>No results found.</p>';
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    } else {
        alert('Please enter a search term.');
    }
}

function displayMovies(movies) {
    movieList.innerHTML = '';
    movies.forEach(movie => {
        
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.png'}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        `;
        movieElement.addEventListener('click', () => displayMovieDetails(movie.imdbID));
       movieContainer.appendChild(movieElement);
    });
    
}


function displayMovieDetails(imdbID) {
    fetch(`${apiUrl}?apikey=${apiKey}&i=${imdbID}`)
        .then(response => response.json())
        .then(data => {
            const movie = data;
            movieDetails.innerHTML = `
                <div class="movie-details">
                    <h2>${movie.Title}</h2>
                    <p><strong>Genre:</strong> ${movie.Genre}</p>
                    <p><strong>Director:</strong> ${movie.Director}</p>
                    <p><strong>Actors:</strong> ${movie.Actors}</p>
                    <p><strong>Plot:</strong> ${movie.Plot}</p>
                    <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
                </div>
            `;
        })
        .catch(error => console.error('Error fetching data:', error));
}
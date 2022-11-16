
let urlPeliPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US&page=1`



fetch(urlPeliPopulares)
.then(function(response){
    return response.json()
})
.then(function(data){
    
    console.log(data);

    let peliculasdata = data.results
    
    let a = document.querySelector(".pelishome") 
    let peliculas = ""

    for (i =0; i < peliculasdata.length; i++){
        peliculas += `
        <article class="art">
            <h2>Películas populares</h2>
            <ul class="pelis">
                <li>
                    <h3>${peliculasdata[i].title}</h3>
                    <a href="./detalle_movie.html"> <img src="https://image.tmdb.org/t/p/w154/${peliculasdata[i].poster_path}" alt="Spiderman"></a>
                    <div class="bajofotos">
                        <p>${peliculasdata[i].release_date}</p> <p>Rating: ${peliculasdata[i].vote.average}</p> <i class="fa-regular fa-star"></i></i>
                    </div>
                </li>
        </article> 
        `
    }
    a.innerHTML = peliculas
    })
    .catch(function(e){
        console.log("Error: " + e);
    })

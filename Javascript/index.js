let urlPeliPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US&page=1`

let urlSeriesPopulares =`https://api.themoviedb.org/3/tv/popular?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US&page=1`

let urlPeliValorada = `https://api.themoviedb.org/3/movie/top_rated?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US&page=1`

fetch(urlPeliPopulares)
.then(function(response){
    return response.json()
})
.then(function(data){
    
    console.log(data);

    let peliculasdata = data.results
    
    let a = document.querySelector(".pelis") 
    let peliculas = ""

    for (i =0; i < 5; i++){
        peliculas += `
                <li>
                    <h3>${peliculasdata[i].title}</h3>
                    <a href="./detail-movie.html?id=${peliculasdata[i].id}"> <img src="https://image.tmdb.org/t/p/w154/${peliculasdata[i].poster_path}" alt="Spiderman"></a>
                    <div class="bajofotos">
                        <p>${peliculasdata[i].release_date}</p> <p>Rating: ${peliculasdata[i].vote_average}</p> <i class="fa-regular fa-star"></i></i>
                    </div>
                </li>
        
        `
    }
    a.innerHTML = peliculas
    })
    .catch(function(e){
        console.log("Error: " + e);
    })

fetch(urlSeriesPopulares)
.then(function(response){
        return response.json()
    })
.then(function(data){
        
        console.log(data);
    
        let seriesdata = data.results
        
        let a = document.querySelector(".series") 
        let series = ""
    
        for (i =0; i < 5; i++){
            series += `
                    <li>
                        <h3>${seriesdata[i].name}</h3>
                        <a href="./detail-serie.html?id=${seriesdata[i].id}"> <img src="https://image.tmdb.org/t/p/w154/${seriesdata[i].poster_path}" alt="Spiderman"></a>
                        <div class="bajofotos">
                            <p>${seriesdata[i].first_air_date}</p> <p>Rating: ${seriesdata[i].vote_average}</p> <i class="fa-regular fa-star"></i></i>
                        </div>
                    </li>
            
            `
        }
        a.innerHTML = series
        })
        .catch(function(e){
            console.log("Error: " + e);
        })

fetch(urlPeliValorada)
.then(function(response){
    return response.json()
})
.then(function(data){
    
    console.log(data);

    let peliculasdata = data.results
    
    let b = document.querySelector(".pelisvaloradas") 
    let peliculas_valoradas = ""

    for (i =0; i < 5; i++){
        peliculas_valoradas += `
                <li>
                    <h3>${peliculasdata[i].title}</h3>
                    <a href="./detail-movie.html?id=${peliculasdata[i].id}"> <img src="https://image.tmdb.org/t/p/w154/${peliculasdata[i].poster_path}" alt="Spiderman"></a>
                    <div class="bajofotos">
                        <p>${peliculasdata[i].release_date}</p> <p>Rating: ${peliculasdata[i].vote_average}</p> <i class="fa-regular fa-star"></i></i>
                    </div>
                </li>
        
        `
    }
    b.innerHTML = peliculas_valoradas
    })
    .catch(function(e){
        console.log("Error: " + e);
    })

let formulario = document.querySelector("form");			
let campoBuscar = document.querySelector(".buscador");	
let errorBusqueda = document.querySelector(".errorBusqueda")

formulario.addEventListener('submit', function(event) {
	event.preventDefault();  

	if (campoBuscar.value === '' ) {	
        errorBusqueda.innerHTML += `El campo esta vacio, complete con una serie o pelicula. ` 
        
    } 
    else if(campoBuscar.value.length<3){
        errorBusqueda.innerHTML += "El texto debe contener al menos tres caracteres."
        
    }
    else {
        this.submit()			
    }
}) 
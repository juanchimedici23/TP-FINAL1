let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id_peli = queryStringObj.get('id');


let peli = `https://api.themoviedb.org/3/movie/${id_peli}?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US`

let urlPeliValorada = `https://api.themoviedb.org/3/movie/top_rated?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US&page=1`



fetch(peli)
.then(function(response){
    return response.json()
})
.then(function(data){
    
    console.log(data);

    let peliculasdata = data
    
    let a = document.querySelector(".pelicula_elegida") 

    let peliculas = `<article> 
                        <a href= "./detalle_movie.html?id=${peliculasdata.id}" > <p>${peliculasdata.title}</p> </a>
                        <section class= "busquedabox">
                        <a href= "./detalle_movie.html?id=${peliculasdata.id}" ><img src ="https://image.tmdb.org/t/p/w154/${peliculasdata.poster_path}" > </a>
                            <div class= "resumenbusqueda">
                                <p> Resumen: ${peliculasdata.overview} </p>
                            </div>
                        </section>
                     </article> `
    
    a.innerHTML += peliculas
    
})
    .catch(function(e){
        console.log("Error: " + e);
    })

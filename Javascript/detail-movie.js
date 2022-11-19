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


    let genero = ""
    let listaGenero = peliculasdata.genres

    
    for (let i = 0; i < listaGenero.length; i++) {
        genero += `•${listaGenero[i].name} 
`
    }
    
    let a = document.querySelector(".pelicula_elegida") 

    let peliculas = `<article> 
                        <h1 class="top_y_BBAD">${peliculasdata.title}</h1>
                        <section class="conteiner_movie">
                            <div class="tpgn">
                                <img src ="https://image.tmdb.org/t/p/w780/${peliculasdata.poster_path}" > 
                            </div>
                            <div class="details" id="letras">
                                <p><strong>Sinópsis:</strong> ${peliculasdata.overview}</p>
                                <ul>
                                    <li><strong>Rating:</strong> ${peliculasdata.vote_average}</li>
                                    <li><strong>Fecha de estreno:</strong> ${peliculasdata.release_date}</li>
                                    <li><strong>Duración:</strong> ${peliculasdata.runtime} minutes</li>
                                    <li><strong>Género:</strong> ${genero}</li>
                                    <li><strong>Get Watch Providers:</strong> ${genero}</li>
                                </ul>
                            </div>
                        </section>
                     </article> `
    
    a.innerHTML += peliculas

    
    

    
})
    .catch(function(e){
        console.log("Error: " + e);
    })

console.log(localStorage);
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');


let serie = `https://api.themoviedb.org/3/tv/${id}?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US`
let favorito = JSON.parse(localStorage.getItem("favoritos"))
console.log(favorito)


function pelisFavoritas (id){
    let peli = `https://api.themoviedb.org/3/movie/${id}?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US`
    fetch(peli)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
    
        console.log(data);

    
        let genero = []
        let listaGenero = data.genres
    
    
        for (let i = 0; i < listaGenero.length; i++) {
                genero.push(`${listaGenero[i].name}`)
        }
            
        let a = document.querySelector(".peliFavorita") 
            
        let peliculas = `<article> 
                                <h1 class="top_y_BBAD">${data.title}</h1>
                                <section class="conteiner_movie">
                                <div class="tpgn">
                                <a href="./detail-movie.html?id=${favorito[i]}"><img src ="https://image.tmdb.org/t/p/w780/${data.poster_path}" ></div></a>
                                </section>
                                </article> `
                                
        a.innerHTML += peliculas
        })
    .catch(function(e){
        console.log("Error: " + e);
    })
}
 for(i= 0;i<favorito.length;i++){
    console.log[1]
    pelisFavoritas(favorito[i])
 }






/* fetch(serie)
.then(function(response){
    return response.json()
})
.then(function(data){
    
    console.log(data);

    let genero = []
    let listaGenero = data.genres

    
    for (let i = 0; i < listaGenero.length; i++) {
        genero.push(`${listaGenero[i].name}`)
    }

    let b = document.querySelector(".serieFavorita") 
    
    let series = `<article> 
                    <h1 class="top_y_BBAD">${data.name}</h1>
                    <section class="conteiner_movie">
                        <div class="tpgn">
                            <img src ="https://image.tmdb.org/t/p/w780/${data.poster_path}" > 
                        </div>
                        <div class="details" id="letras">
                            <p><strong>Sinópsis:</strong> ${data.overview}</p>
                            <ul>
                                <li><strong>Rating:</strong> ${data.vote_average}</li>
                                <li><strong>Fecha de estreno:</strong> ${data.first_air_date}</li>
                                <li><strong>Género:</strong></li>
                                <li>${genero}</li>
                                <li><strong>Get Watch Providers:</strong> </li>
                            </ul>
                        </div>
                    </section>
                </article> `
    
    b.innerHTML = series
    })

    .catch(function(e){
        console.log("Error: " + e);
        
    })  */
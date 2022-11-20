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


    let genero = []
    let listaGenero = data.genres

    
    for (let i = 0; i < listaGenero.length; i++) {
        genero.push(`${listaGenero[i].name}`)
    }
    
    let a = document.querySelector(".pelicula_elegida") 

    let peliculas = `<article> 
                        <h1 class="top_y_BBAD">${data.title}</h1>
                        <section class="conteiner_movie">
                            <div class="tpgn">
                                <img src ="https://image.tmdb.org/t/p/w780/${data.poster_path}" > 
                            </div>
                            <div class="details" id="letras">
                                <p><strong>Sinópsis:</strong> ${data.overview}</p>
                                <ul>
                                    <li><strong>Rating:</strong> ${data.vote_average}</li>
                                    <li><strong>Fecha de estreno:</strong> ${data.release_date}</li>
                                    <li><strong>Duración:</strong> ${data.runtime} minutes</li>
                                    <li><strong>Género:</strong> ${genero}</li>
                                    <li><strong>Get Watch Providers:</strong> ${genero}</li>
                                </ul>
                                <div id = "fav"><button type= "button"><i class="fa-regular fa-star"></i></button></div>
                            </div>
                        </section>
                     </article> `
    
    


    a.innerHTML += peliculas

    let boton = document.querySelector("button")
    let icon = document.querySelector(".fa-regular")
    console.log(icon);

    boton.addEventListener("click", function(){
        if (icon.classList.contains("fa-regular")) {
            icon.classList.remove("fa-regular")
            icon.classList.add("fa-solid")
            
        } else {
            icon.classList.remove("fa-solid")
            icon.classList.add("fa-regular")}
            
        
})
    

    
})
    .catch(function(e){
        console.log("Error: " + e);
    })



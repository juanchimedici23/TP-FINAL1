let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');

let peli = `https://api.themoviedb.org/3/movie/${id}?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US`

let urlPeliValorada = `https://api.themoviedb.org/3/movie/top_rated?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US&page=1`

let favoritos = []

let recuperoStorage = localStorage.getItem("favoritos")
    
if (recuperoStorage != null) {
    favoritos = JSON.parse(recuperoStorage)
}


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
                                    <li><strong>Get Watch Providers:</strong> ${data.production_companies.name}</li>
                                </ul>
                                <div id = "rec"><button type= "button-rec">"Get Recomendations"</button></div>
                                <br>
                                <div id = "fav"><button type= "button"><i class="fa-regular fa-star"></i></button></div>
                                </div>
                        </section>
                        </article> `
    
    

                        
    a.innerHTML += peliculas

    
    
    





})
.catch(function(e){
    console.log("Error: " + e);
})

let recomendaciones = document.querySelector("#rec");
let seccion_recs = document.querySelector("#recs_eleguidas");

recomendaciones.addEventListener("click",function(recs){
    recs.preventDefault()
    localStorage.setItem("Recomendaciones", True)
    seccion_recs.style.display = "block" 
    let guardar = localStorage.getItem("Recomendaciones")
})


    
window.addEventListener("load", function(event){ 
    event.preventDefault()
    let boton = document.querySelector("#fav")
    let icon = document.querySelector(".fa-star")
    console.log(boton);
    if (favoritos.includes(id)) {
        icon.classList.remove("fa-regular")
        icon.classList.add("fa-solid")
    }
    boton.addEventListener("click", function(e){
        e.preventDefault()
        if (icon.classList.contains("fa-solid")) {
            let indice = favoritos.indexOf(id)
            favoritos.splice(indice,1)
            icon.classList.remove("fa-solid")
            icon.classList.add("fa-regular")
        
         } else {
        favoritos.push(id)
        icon.classList.remove("fa-regular")
        icon.classList.add("fa-solid")
    }
    let favoritosToString = JSON.stringify(favoritos)
    let guardarfav = localStorage.setItem("favoritos",favoritosToString)
    console.log(localStorage);
    })
    localStorage.setItem(guardarfav)
    })
    console.log(id)
    console.log(localStorage)   
    
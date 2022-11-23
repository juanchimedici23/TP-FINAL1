let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let recomendaciones = document.querySelector("#rec");
let seccion_recs = document.querySelector("#recs_eleguidas");
let provider = document.querySelector(".provider");


let peli = `https://api.themoviedb.org/3/movie/${id}?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US`

let urlPeliValorada = `https://api.themoviedb.org/3/movie/top_rated?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US&page=1`

let providersPeli = `https://api.themoviedb.org/3/watch/providers/movie?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US`;

let urlpelirecomendada = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US&page=1`

let favoritoPeli = []

let recuperoStorage = localStorage.getItem("favoritoPeli")
    
if (recuperoStorage != null) {
    favoritoPeli = JSON.parse(recuperoStorage)
}


fetch(peli)
.then(function(response){
    return response.json()
})
.then(function(data){
    
   

    
    let genero = []
    let listaGenero = data.genres
    
    
    for (let i = 0; i < listaGenero.length; i++) {
        genero.push(`${listaGenero[i].name}`)
    }
    
    let a = document.querySelector(".pelicula_elegida") 
    
    let peliculas = `<article class = "detalle"> 
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
                                </ul>
                                
                        </section>
                        </article> `
                  
    a.innerHTML += peliculas
    

fetch(urlpelirecomendada)
    .then(function(response){
        return response.json()
    })
    .then(function(data){

        let info = data.results
       
        agregar = ""
        for (let i = 0; i < 5; i++) {
            agregar +=  `<li>
                <h3>${info[i].title}</h3>
                <a href="./detail-movie.html?id=${info[i].id}"> <img src="https://image.tmdb.org/t/p/w154/${info[i].poster_path}" alt="Error"></a>
                <br>
            </li>
            `
        }
        provider.innerHTML = agregar

    })
    .catch(function(e){
        console.log("Error: " + e);
    })
    
})
.catch(function(e){
    console.log("Error: " + e);
})

fetch(providersPeli)
    .then(function(response){
        return response.json()
    })
    .then(function(data){

        

        let info = data.results
        console.log(info);
        let querywatch = document.querySelector(".providers")
        agregado = ""
            
                
                
        for (let i= 0; i< 5; i++){ 
            let logo = info[i].logo_path
                
            agregado += `
                    <img src = "https://image.tmdb.org/t/p/original/${logo}">`
        }
            
            
        
        querywatch.innerHTML = agregado

    })
    .catch(function(e){
        console.log("Error: " + e);
    })

recomendaciones.addEventListener("click",function(recs){
    recs.preventDefault()
    seccion_recs.style.display = "block"
})

  

window.addEventListener("load", function(event){ 
    event.preventDefault()
    let boton = document.querySelector("#fav")
    let icon = document.querySelector(".fa-star")
   
    if (favoritoPeli.includes(id)) {
        icon.classList.remove("fa-regular")
        icon.classList.add("fa-solid")
    }
    boton.addEventListener("click", function(e){
        e.preventDefault()
        if (icon.classList.contains("fa-solid")) {
            let indice = favoritoPeli.indexOf(id)
            favoritoPeli.splice(indice,1)
            icon.classList.remove("fa-solid")
            icon.classList.add("fa-regular")
        
         } else {
        favoritoPeli.push(id)
        icon.classList.remove("fa-regular")
        icon.classList.add("fa-solid")
    }
    let favoritosToString = JSON.stringify(favoritoPeli)
    localStorage.setItem("favoritoPeli",favoritosToString)
    
   
    })
})
let formulario = document.querySelector("form");			
let campoBuscar = document.querySelector(".buscador");	
let errorBusqueda = document.querySelector(".errorBusqueda")
       
formulario.addEventListener('submit', function(event) {
    event.preventDefault();  
        
    if (campoBuscar.value == '' ) {	
        errorBusqueda.innerHTML = `El campo esta vacio, complete con una serie o pelicula. ` 
    
            } 
    else if(campoBuscar.value.length<3){
        errorBusqueda.innerHTML = "El texto debe contener al menos tres caracteres."
                
            }
    else {
            this.submit()			
            }
}) 
    
   
    
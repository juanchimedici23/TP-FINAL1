let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id_peli = queryStringObj.get('id');



let lista = `https://api.themoviedb.org/3/movie/popular?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US&page=1`

let listaGeneros = `https://api.themoviedb.org/3/genre/movie/list?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US`

fetch(listaGeneros)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        
        let generos = data.genres 
        let cont = document.querySelector(".tituloGenero")
        let titulo = ""
    
        for (let i = 0; i < 10; i++) {
            if (id_peli == generos[i].id){ 
                titulo += `<h1>Peliculas de: ${generos[i].name}</h1>`
        }}
        console.log(titulo);
        cont.innerHTML += titulo

    })
    .catch(function(e){
        console.log(e);
    })


fetch(lista)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        
        let info = data.results
        console.log(info)
        let agregado = ""
        let juja = document.querySelector(".genero_elegido")
        for (let index = 0; index < info.length; index++) {
            if (info[index].genre_ids.includes(parseInt(id_peli))) {

                agregado += `<li>
                <h3>${info[index].title}</h3>
                <a href="./detail-movie.html?id=${info[index].id}"> <img src="https://image.tmdb.org/t/p/w154/${info[index].poster_path}" alt="Error"></a>
                <div class="bajofotos">
                    <p>${info[index].release_date}</p><p>Rating: ${info[index].vote_average}</p> 
                </div>
                </li>`
             
            }
        }
        juja.innerHTML += agregado
    })
    .catch(function(e){
        console.log(e);
    })

    

let formulario = document.querySelector("form");			
let campoBuscar = document.querySelector(".buscador");	
let errorBusqueda = document.querySelector(".errorBusqueda")
       
formulario.addEventListener('submit', function(event) {
    event.preventDefault();  
        
    if (campoBuscar.value == '' ) {	
        errorBusqueda.innerHTML += `El campo esta vacio, complete con una serie o pelicula. ` 
    
            } 
    else if(campoBuscar.value.length<3){
        errorBusqueda.innerHTML += "El texto debe contener al menos tres caracteres."
                
            }
          else {
            this.submit()			
            }
}) 
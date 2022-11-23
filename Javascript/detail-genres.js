let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id_peli = queryStringObj.get('id');


let genPeli = `https://api.themoviedb.org/3/genre/movie/list?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US`

let genSerie = `https://api.themoviedb.org/3/genre/tv/list?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US`

fetch(genPeli)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
      
        let listaGeneros = data.genres
        for (let index = 0; index < listaGeneros.length; index++) {
            let idgenero = listaGeneros[index].id
            if ( idgenero == parseInt(id_peli)){ 
                
                
                let listaPeliculas = `https://api.themoviedb.org/3/movie/popular?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US&page=1`
                
                let peli_igual_genero = []

                let agregado = ""



                // COMIENZO SEGUNDO FETCH
                fetch(listaPeliculas)
                    .then(function(response){
                    return response.json()
                })
                .then(function(data){
                    
                    let peliculas = data.results
                    
                    for (let index = 0; index < peliculas.length; index++) {
                        if (peliculas[index].genre_ids.includes(idgenero)) {
                            peli_igual_genero.push(peliculas[index])
                        }
                        
                    }
                    
                    })
                    .catch(function(e){
                        console.log("Error: " + e);
                    })

                    // FIN SEGUNDO FETCH
                    console.log(peli_igual_genero);
                    agregado = ""
                for (let index = 0; index < 5; index++) {
                        agregado += `<li>
                        <h3>${peli_igual_genero[index].title}</h3>
                        <a href="./detail-movie.html?id=${peli_igual_genero[index].id}"> <img src="https://image.tmdb.org/t/p/w154/${peli_igual_genero[index].poster_path}" alt="Error"></a>
                        <div class="bajofotos">
                            <p>${peli_igual_genero[index].release_date}</p><p>Rating: ${peli_igual_genero[index].vote_average}</p> 
                        </div>
                    </li>`
                    }
                    let generoElegido = document.querySelector(".genero_elegido")
                    generoElegido.innerHTML = agregado
                    
                }
                
            }

                    

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
        errorBusqueda.innerHTML = `El campo esta vacio, complete con una serie o pelicula. ` 
    
            } 
    else if(campoBuscar.value.length<3){
        errorBusqueda.innerHTML = "El texto debe contener al menos tres caracteres."
                
            }
          else {
                this.submit()			
            }
        }) 
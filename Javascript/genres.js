


let generos = `https://api.themoviedb.org/3/genre/movie/list?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US`

fetch (generos)
.then(function(response){
    return response.json()
})
.then(function(data){
    
    console.log(data);

    let genre = data.genres
    console.log(genre)

    
    let a = document.querySelector(".todos_generos") 

    let genero_especifico = ""

    


    for ( i = 0; i < 7; i++){
        
        genero_especifico += ` <article class="gen">
                                    <a href="./detail-genre.html?id=${genre[i].id}" class ="sin_subrayado"><h2 class = "a">${genre[i].name}</h2></a>
                                </article>`
        

        
    }
    a.innerHTML = genero_especifico
    })
    .catch(function(e){
        console.log("Error: " + e);
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
    
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
const query = queryStringObj.get("buscador"); /* cambiarlo despues de armar el home */

console.log(query)


let api_key2 = "1c7b96c9c6844bd81ab3f6d24f285c12"
let peli = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${api_key}&language=en-U`

fetch(peli)
.then(function(response){
    return response.json()
})
.then(function(data){
    
    console.log(data);

    let peliculasdata = data.results
    
    let a = document.querySelector(".muestrapeli") 
    let peliculas = ""

    for (i =0; i < peliculasdata.length; i++){
        peliculas += `<article> 
                        <a href= "./detalle_movie.html?id=${peliculasdata[i].id}" > <p>${peliculasdata[i].title}</p> </a>
                        <section class= "busquedabox">
                            <img src ="https://image.tmdb.org/t/p/w154/${peliculasdata[i].poster_path}" >
                            <div class= "resumenbusqueda">
                                <p> Resumen: ${peliculasdata[i].overview} </p>
                            </div>
                        </section>
                     </article> `
    }
    a.innerHTML = peliculas
    })
    .catch(function(e){
        console.log("Error: " + e);
    })


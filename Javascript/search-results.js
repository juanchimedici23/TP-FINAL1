let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
const query = queryStringObj.get("buscador");

console.log(query)



let URLpeli = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US&page=1&include_adult=false`

let URLserie = `https://api.themoviedb.org/3/search/tv?query=${query}&api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US&page=1&include_adult=false`

let caso_particular = document.querySelector(".sin_resultados")

fetch(URLpeli)
.then(function(response){
    return response.json()
})
.then(function(data){
    
    console.log(data);

    let peliculasdata = data.results
    
    let a = document.querySelector(".muestrapeli") 
    let peliculas = ""
    if(peliculasdata.length === 0) {
        caso_particular.innerHTML += "No se encontraron resultados"
    } else {
        for (i =0; i < peliculasdata.length; i++){
            
            peliculas += `<article> 
                            <a href= "./detail-movie.html?id=${peliculasdata[i].id}" > <p>${peliculasdata[i].title}</p> </a>
                            <section class= "busquedabox">
                            <a href= "./detail-movie.html?id=${peliculasdata[i].id}" ><img src ="https://image.tmdb.org/t/p/w154/${peliculasdata[i].poster_path}" ></a>
                                <div class= "resumenbusqueda">
                                    <p> Resumen: ${peliculasdata[i].overview} </p>
                                </div>
                            </section>
                         </article> `
        }
        a.innerHTML = peliculas
    }
})

    .catch(function(e){
        console.log("Error: " + e);
    })

fetch(URLserie)
.then(function(response){
    return response.json()
})
.then(function(data){
    
    console.log(data);

    let seriesdata = data.results
    
    let b = document.querySelector(".muestraserie") 
    let series = ""
        if(peliculasdata.length === 0) {
        caso_particular.innerHTML += "No se encontraron resultados"
     }  else {
            for (i =0; i < seriesdata.length; i++){
                series += `<article> 
                        <a href= "./detail-serie.html?id=${seriesdata[i].id}" > <p>${seriesdata[i].name}</p> </a>
                        <section class= "busquedabox">
                            <a href= "./detail-serie.html?id=${seriesdata[i].id}" ><img src ="https://image.tmdb.org/t/p/w154/${seriesdata[i].poster_path}" ></a>
                            <p> Resumen: ${seriesdata[i].overview} </p>
                        </section>
                    </article> `
}
b.innerHTML = series}     
    
        
    })

    .catch(function(e){
        console.log("Error: " + e);
        
    })
    
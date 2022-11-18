let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
const query = queryStringObj.get("buscador");

console.log(query)



let URLpeli = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US&page=1&include_adult=false`

let URLserie = `https://api.themoviedb.org/3/search/tv?query=${query}&api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US&page=1&include_adult=false`

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
        //mete p con no se encontraron resultados HACER LO MISMO QUE CON LAS SERIES
    } else {
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

    for (i =0; i < seriesdata.length; i++){
        series += `<article> 
                        <a href= "./detalle_ser.html?id=${seriesdata[i].id}" > <p>${seriesdata[i].name}</p> </a>
                        <section class= "busquedabox">
                            <img src ="https://image.tmdb.org/t/p/w154/${seriesdata[i].poster_path}" >
                            <p> Resumen: ${seriesdata[i].overview} </p>
                        </section>
                    </article> `
    }
    b.innerHTML = series
    })

    .catch(function(e){
        console.log("Error: " + e);
        
    })

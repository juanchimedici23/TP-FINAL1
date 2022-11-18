let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id"); 
console.log(id)

let serie = `https://api.themoviedb.org/3/tv/${id}?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US`

fetch(serie)
.then(function(response){
    return response.json()
})
.then(function(data){
    
    console.log(data);

    let seriesdata = data
    
    let b = document.querySelector(".serie_seleccionada") 
    
    let series = `<article> 
                        <a href= "./detalle_ser.html?id=${seriesdata.id}" > <p>${seriesdata.name}</p> </a>
                        <section class= "busquedabox">
                        <a href= "./detalle_ser.html?id=${seriesdata.id}" ><img src ="https://image.tmdb.org/t/p/w154/${seriesdata.poster_path}" ></a>
                            <p> Resumen: ${seriesdata.overview} </p>
                        </section>
                    </article> `
    
    b.innerHTML = series
    })

    .catch(function(e){
        console.log("Error: " + e);
        
    })
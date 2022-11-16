let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
const query = queryStringObj.get("buscador"); /*cambiar por lo que funciona, despues de hacer home*/

console.log(query)
let api_key = "1c7b96c9c6844bd81ab3f6d24f285c12"
let serie = `https://api.themoviedb.org/3/tv/{tv_id}?api_key=${api_key}&language=en-US`

fetch(serie)
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
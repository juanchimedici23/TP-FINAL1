console.log(localStorage);
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');



let favoritoPeli = JSON.parse(localStorage.getItem("favoritoPeli"))
let favoritoSerie = JSON.parse(localStorage.getItem("favoritoSerie"))



console.log(`Las peliculas favoritas tienen el id: ${favoritoPeli}
             Las series favoritas tienen el id: ${favoritoSerie}`)


function pelisFavoritas (id){
    let peli = `https://api.themoviedb.org/3/movie/${id}?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US`
    
    fetch(peli)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        

        console.log(data);
            
        let a = document.querySelector(".peliFavorita") 
        

        


        let peliculas =`<article> 
                            <h1 class="top_y_BBAD">${data.title}</h1>
                            <section class="conteiner_movie2">
                                <div>
                                    <a href="./detail-movie.html?id=${id}"><img src ="https://image.tmdb.org/t/p/w154/${data.poster_path}" ></div></a>
                            </section>
                        </article>`
                                
        a.innerHTML += peliculas
        })
    .catch(function(e){
        console.log("Error: " + e);
    })
}

function seriesFavoritas(id){ 
    let serie = `https://api.themoviedb.org/3/tv/${id}?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US`
    console.log(id);
    fetch(serie)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        
        console.log(data);

        let b = document.querySelector(".serieFavorita") 
        
        let series = `<article> 
                        <h1 class="top_y_BBAD">${data.name}</h1>
                        <section>
                            <div >
                            <a href="./detail-serie.html?id=${id}"><img src ="https://image.tmdb.org/t/p/w154/${data.poster_path}" ></div></a>
                            </div>
                        </section>
                    </article> `
        
        b.innerHTML = series
        })

        .catch(function(e){
            console.log("Error: " + e);
            
        })  
}

for(i= 0;i<favoritoPeli.length;i++){
   pelisFavoritas(favoritoPeli[i])
   

}
for(i= 0;i<favoritoSerie.length;i++){
    seriesFavoritas(favoritoSerie[i])
    
 
 }

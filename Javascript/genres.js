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
                                    <a href="./detail-genre.html?genre=${genre[i].name}"><h2>${genre[i].name}</h2></a>
                                </article>`
        

        
    }
    a.innerHTML = genero_especifico
    })
    .catch(function(e){
        console.log("Error: " + e);
    })

    

    
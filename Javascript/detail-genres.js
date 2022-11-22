let genPeli = `https://api.themoviedb.org/3/genre/movie/list?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US`

let genSerie = `https://api.themoviedb.org/3/genre/tv/list?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US`

fetch(genPeli)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
      
        let datos = data.results
        console.log(datos);
        

        })
        .catch(function(e){
            console.log("Error: " + e);
        })
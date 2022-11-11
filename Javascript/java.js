/* Search */

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)

console.log(queryStringObj.get("buscador")); 

let URLpeli = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US"

let URLserie = "https://api.themoviedb.org/3/tv/{tv_id}?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US"

fetch(URLpeli)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

        let datapeli = data.results

        let a = document.querySelector(".busqueda")

        log

        

    })
    .catch(function(e){
        console.log("Error: " + e);
    })


let valor = document.querySelector("form")

valor.addEventListener("submit",function(event){
    event.preventDefault()

})
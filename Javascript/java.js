/* Search */

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
const query = queryStringObj.get("buscador");

console.log(query)



let URLpeli = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US&page=1&include_adult=false`

let URLserie = "https://api.themoviedb.org/3/tv/{tv_id}?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US"

fetch(URLpeli)
.then(function(response){
    return response.json()
})
.then(function(data){
    
    console.log(data);
    /* let datapeli = data.results
    
    let a = document.querySelector(".busqueda") */
    })
    .catch(function(e){
        console.log("Error: " + e);
    })


/* let valor = document.querySelector("form")

valor.addEventListener("submit",function(event){
    event.preventDefault()

}) */
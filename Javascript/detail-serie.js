let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id"); 
let recomendaciones = document.querySelector("#rec");
let seccion_recs = document.querySelector("#recs_eleguidas");
let provider = document.querySelector(".provider");
console.log(id)

let serie = `https://api.themoviedb.org/3/tv/${id}?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US`

let urlserierecomendada = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=1c7b96c9c6844bd81ab3f6d24f285c12&language=en-US&page=1`

let favoritoSerie = []

let recuperoStorage = localStorage.getItem("favoritoSerie")
    
if (recuperoStorage != null) {
    favoritoSerie = JSON.parse(recuperoStorage)
}

fetch(serie)
.then(function(response){
    return response.json()
})
.then(function(data){
    
    console.log(data);

    let genero = []
    let listaGenero = data.genres

    
    for (let i = 0; i < listaGenero.length; i++) {
        genero.push(`${listaGenero[i].name}`)
    }

    let b = document.querySelector(".serie_seleccionada") 
    
    let series = `<article> 
                    <h1 class="top_y_BBAD">${data.name}</h1>
                    <section class="conteiner_movie">
                        <div class="tpgn">
                            <img src ="https://image.tmdb.org/t/p/w780/${data.poster_path}" > 
                        </div>
                        <div class="details" id="letras">
                            <p><strong>Sinópsis:</strong> ${data.overview}</p>
                            <ul>
                                <li><strong>Rating:</strong> ${data.vote_average}</li>
                                <li><strong>Fecha de estreno:</strong> ${data.first_air_date}</li>
                                <li><strong>Género:</strong></li>
                                <li>${genero}</li>
                                <li><strong>Get Watch Providers:</strong> </li>
                            </ul>
                        </div>
                    </section>
                </article> `
    
    b.innerHTML = series
    })

    .catch(function(e){
        console.log("Error: " + e);
        
    })

    fetch(urlserierecomendada)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let info = data.results
        console.log(info);
        agregar = ""
        if (info.length < 1) {
            agregar = `<p>No hay series recomendadas</p>`
        }
        else{ 
        for (let i = 0; i < 5; i++) {
            agregar +=  `<li>
                <h3>${info[i].name}</h3>
                <a href="./detail-serie.html?id=${info[i].id}"> <img src="https://image.tmdb.org/t/p/w154/${info[i].poster_path}" alt="Error"></a>
                <br>
            </li>
            `
        }
        }
        provider.innerHTML = agregar



    })
    .catch(function(e){
        console.log("Error: " + e);
    })


    
    recomendaciones.addEventListener("click",function(recs){
        recs.preventDefault()
        localStorage.setItem("Recomendaciones", "True")
        seccion_recs.style.display = "block" 
    })
    
    let guardar = localStorage.getItem("Recomendaciones")
    
        
    window.addEventListener("load", function(event){ 
        event.preventDefault()
        let boton = document.querySelector("#fav")
        let icon = document.querySelector(".fa-star")
        console.log(boton);
        if (favoritoSerie.includes(id)) {
            icon.classList.remove("fa-regular")
            icon.classList.add("fa-solid")
        }
        boton.addEventListener("click", function(e){
            e.preventDefault()
            if (icon.classList.contains("fa-solid")) {
                let indice = favoritoSerie.indexOf(id)
                favoritoSerie.splice(indice,1)
                icon.classList.remove("fa-solid")
                icon.classList.add("fa-regular")
            
             } else {
            favoritoSerie.push(id)
            icon.classList.remove("fa-regular")
            icon.classList.add("fa-solid")
        }
        let favoritosToString = JSON.stringify(favoritoSerie)
        localStorage.setItem("favoritoSerie",favoritosToString)
        console.log(localStorage);
        })
        
        })
        console.log(id)
        console.log(localStorage)   
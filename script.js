const api = "http://api.themoviedb.org/3/discover/movie?%20%E2%86%B5%20sort_by=popularity.desc?&api_key=b86c68a6046a75a606c85f7e6a009eb5"
const contenedor = document.getElementById("Contenedorpeliculas")

fetch(api)
.then(response => response.json())
.then(data => {
    const datos = data.results
    datos.map(dato => {
        let div = document.createElement("div")
        div.id = "pelicula"

        let titulo = document.createElement("h3")
        titulo.textContent = dato.original_title
    
        let poster = document.createElement("img")
        poster.src = "https://image.tmdb.org/t/p/original" + dato.poster_path

        div.appendChild(titulo)
        div.appendChild(poster)

        contenedor.appendChild(div)
        console.log(dato)
    })
})
.catch(error => console.error("Error al obtener datos:", error));
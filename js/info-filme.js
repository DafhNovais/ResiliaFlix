let titulo = document.getElementById("titulo")
let generos = document.getElementById("generos")
let ano = document.getElementById("ano")
let filme = document.querySelector(".filme")
let listaFimes = [
    {
        "nome" : "Moana",
        "generos" : "Infantil, Musical",
        "ano" : "2016"
    },

    {
        "nome" : "Homem Aranha",
        "generos" : "Ação, Aventura, Sci-Fi",
        "ano" : "2002",
        "parecidos" : [0,10,6,3]
    }
]

titulo.innerText = listaFimes[0].nome
generos.innerText = listaFimes[0].generos
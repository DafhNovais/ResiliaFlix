let titulo = document.getElementById("titulo")
let generos = document.getElementById("generos")
let ano = document.getElementById("ano")
let sinopse = document.getElementById("sinopse")
let duracao = document.getElementById("duracao")
let filme = document.querySelector(".filme")
let listaFimes = [
    {
        "nome" : "Moana",
        "generos" : "Infantil, Musical",
        "ano" : "2016",
        "sinopse" : "Uma jovem parte em uma missão para salvar seu povo. Durante a jornada, Moana conhece o outrora poderoso semideus Maui, que a guia em sua busca para se tornar uma mestre em encontrar caminhos. Juntos, eles navegam pelo oceano em uma viagem incrível.",
        "duracao" : "Duração 1h 43m"
    },

    {
        "nome" : "Homem Aranha",
        "generos" : "Ação, Aventura, Sci-Fi",
        "ano" : "2002",
        "sinopse" : "Depois de ser picado por uma aranha geneticamente modificada em uma demonstração científica, o jovem nerd Peter Parker ganha superpoderes. Inicialmente, ele pretende usá-los para para ganhar dinheiro, adotando o nome de Homem-Aranha e se apresentando em lutas de exibição. Porém, ao presenciar o assassinando de seu tio Ben e sentir-se culpado, Peter decide não mais usar seus poderes para proveito próprio e sim para enfrentar o mal, tendo como seu primeiro grande desafio o psicótico Duende Verde.",
        "duracao" : "Duração 121 min"
        
    },

    
    {
        "nome" : "A bela e a fera",
        "generos" : "Animação, Familiar, Fantasia",
        "ano" : "1991",
        "sinopse" : "Moradora de uma pequena aldeia francesa, Bela tem o pai capturado pela Fera e decide entregar sua vida ao estranho ser em troca da liberdade do progenitor. No castelo, ela conhece objetos mágicos e descobre que a Fera é na verdade um príncipe que precisa de amor para voltar à forma humana.",
        "duracao" : "Duração 84 min"
        
    },

    
    {
        "nome" : "Homem Aranha",
        "generos" : "Ação, Aventura, Sci-Fi",
        "ano" : "2002",
        "sinopse" : "",
        "duracao" : ""
        
    },

    
    {
        "nome" : "Star Wars",
        "generos" : "Ação, Aventura, Sci-Fi",
        "ano" : "2002",
        "sinopse" : "",
        "duracao" : ""
        
    },

    
    {
        "nome" : "Indiana Jones",
        "generos" : "Ação, Aventura, Sci-Fi",
        "ano" : "2002",
        "sinopse" : "",
        "duracao" : ""
        
    },

    
    {
        "nome" : "E.T.",
        "generos" : "Ação, Aventura, Sci-Fi",
        "ano" : "2002",
        "sinopse" : "",
        "duracao" : ""
        
    },

    
    {
        "nome" : "De volta para o futuro",
        "generos" : "Ação, Aventura, Sci-Fi",
        "ano" : "2002",
        "sinopse" : "",
        "duracao" : ""
        
    },

    
    {
        "nome" : "Grease",
        "generos" : "Ação, Aventura, Sci-Fi",
        "ano" : "2002",
        "sinopse" : "",
        "duracao" : ""
        
    },

    
]

titulo.innerText = listaFimes[0].nome
generos.innerText = listaFimes[0].generos
ano.innerText = listaFimes[0].ano
sinopse.innerText = listaFimes[0].sinopse
duracao.innerText = listaFimes[0].duracao
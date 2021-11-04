var valorFilmes = document.querySelector("#lupa");
var filme1 = document.getElementById("StarWars");
var filme2 = document.getElementById("Titanic");
var filme3 = document.getElementById("DeVoltaParaOFuturo");
var filme4 = document.getElementById("PulpFiction");
var filme5 = document.getElementById("JurassicPark");
var filme6 = document.getElementById("HomemAranha");
var filme7 = document.getElementById("ABelaEAFera");
var filme8 = document.getElementById("ET");
var filme9 = document.getElementById("indianaJones");
var flime10 = document.getElementById("CurtindoAVida");
var filme11 = document.getElementById("Grease");
var filme12 = document.getElementById("gonnies");
var mensagemErro = document.getElementById("mensagem");
var imagensCatalogo = [[filme1, filme2, filme3, filme4, filme5, filme6]
, [filme7, filme8,filme9, flime10, filme11, filme12]]
var todosFilmes = [["Star Wars episódio IV", "Titanic", "De Volta para o Futuro", "Pulp Fiction", "Jurassic Park", "O Homem Aranha"],
["A Bela e a Fera", "ET","Indiana Jones", "Curtindo a Vida Adoidado", "Grease", "Os Goonies"]];

function moverOsItens () {
   for (i = 0; i < 2; i++) {
      for (j = 0; j < 6; j++) {
       imagensCatalogo[i][j].style.display= "none";
      }
   }
}

function itens () {
   for (i = 0; i < 2; i++) {
      for (j = 0; j < 6; j++) {
       imagensCatalogo[i][j].style.display ="";
      }
   }
}

valorFilmes.addEventListener("input", function () {
     let valor = this.value
     let filmePopular = document.getElementById("filmesPopulares")
     let filmeNostalgico = document.getElementById("filmesNostalgicos")

         function erro () {
         moverOsItens();
         filmePopular.style.display ="none";
         filmeNostalgico.style.display ="none";
         var conteudo = mensagemErro.innerHTML = "NÃO TEM ESSE FILME! DIGITE CORRETAMENTE O NOME DO FILME!";
         mensagemErro.style.display = "";
         return conteudo;
      } 
      
         erro();
          
     switch (valor) {
         case todosFilmes[0][0]:
            moverOsItens();
            imagensCatalogo[0][0].style.display = "";
            filmePopular.style.display = "none";
            filmeNostalgico.style.display = "none";
            mensagemErro.style.display = "none";
         break;

         case todosFilmes[0][1]:
            moverOsItens();
            imagensCatalogo[0][1].style.display = "";
            filmePopular.style.display = "none";
            filmeNostalgico.style.display = "none";
            mensagemErro.style.display = "none";
         break;

         case todosFilmes[0][2]:
            moverOsItens();
            imagensCatalogo[0][2].style.display = "";
            filmePopular.style.display = "none";
            filmeNostalgico.style.display = "none";
            mensagemErro.style.display = "none";
         break;

         case todosFilmes[0][3]:
            moverOsItens();
            imagensCatalogo[0][3].style.display = "";
            filmePopular.style.display = "none";
            filmeNostalgico.style.display = "none";
            mensagemErro.style.display = "none";
         break;

         case todosFilmes[0][4]:
            moverOsItens ();   
            imagensCatalogo[0][4].style.display = "";
            filmePopular.style.display = "none";
            filmeNostalgico.style.display = "none";
            mensagemErro.style.display = "none";
         break;

         case todosFilmes[0][5]:
            moverOsItens ();
            imagensCatalogo[0][5].style.display = "";
            filmePopular.style.display = "none";
            filmeNostalgico.style.display = "none";
            mensagemErro.style.display = "none";
         break;

         case todosFilmes[1][0]:
            moverOsItens();
            imagensCatalogo[1][0].style.display = "";
            filmePopular.style.display = "none";
            filmeNostalgico.style.display = "none";
            mensagemErro.style.display = "none";
         break;

         case todosFilmes[1][1]:
            moverOsItens();
            imagensCatalogo[1][1].style.display = "";
            filmePopular.style.display = "none";
            filmeNostalgico.style.display = "none";
            mensagemErro.style.display = "none";
         break;

         case todosFilmes[1][2]:
            moverOsItens();
            imagensCatalogo[1][2].style.display = "";
            filmePopular.style.display = "none";
            filmeNostalgico.style.display = "none";
            mensagemErro.style.display = "none";
         break;
         
         case todosFilmes[1][3]:
            moverOsItens();
            imagensCatalogo[1][3].style.display = "";
            filmePopular.style.display = "none";
            filmeNostalgico.style.display = "none";
            mensagemErro.style.display = "none";
            break;
        
        case todosFilmes[1][4]:
            moverOsItens();
            imagensCatalogo[1][4].style.display = "";
            filmePopular.style.display = "none";
            filmeNostalgico.style.display = "none";
            mensagemErro.style.display = "none";
            break;

        case todosFilmes[1][5]:
            moverOsItens();
            imagensCatalogo[1][5].style.display = "";
            filmePopular.style.display = "none";
            filmeNostalgico.style.display = "none";
            mensagemErro.style.display = "none";
            break;
         
         case "":
            itens ();
            filmePopular.style.display = "";
            filmeNostalgico.style.display = "";
            mensagemErro.style.display = "none";

      }
})
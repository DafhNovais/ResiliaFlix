const email = document.querySelector("#campo-email-esqueci");
const botao = document.querySelector("#botao-enviar-modal");

email.addEventListener("input", function(){
    let emailUsuario = this.value
    if (validacaoEmailModal(emailUsuario)) {
        botao.onclick = function() {
            alert("Email enviado para "  + emailUsuario + "! Siga as orientações do e-mail para redefinir sua senha.");
        }
    } else {
        botao.onclick = function(a) {
            alert("Insira um e-mail válido!");
            a.preventDefault();
        }
    } 
});

function validacaoEmailModal(field) {
    usuario = field.substring(0, field.indexOf("@"));
    dominio = field.substring(field.indexOf("@")+ 1, field.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 2)) {
            return true;
    } 
}
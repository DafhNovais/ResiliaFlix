
function validarEmail(email) {
    usuario = email.value.substring(0, email.value.indexOf("@"));
    dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 2)) {
            document.getElementById("msgemail").innerHTML="<p style='color:#1eff00; font-weight:bold' >Email válido </p>";
            return;    
    }
    else{
        document.getElementById("msgemail").innerHTML="<p style='color:#ff0000; font-weight:bold' >Email inválido </p>";

    } 
}   

function validarSenha(senha){

    var senha = formuser.senha.value;

    if(senha != " " && senha.length >= 6 && senha.length <= 8){
        document.getElementById("msgsenha").innerHTML="<p style='color:#1eff00; font-weight:bold; margin-botton:0' >Senha válida </p>"
        return;       
    }
    else{
        document.getElementById("msgsenha").innerHTML="<p style='color:#ff0000; font-weight:bold' >Senha inválida</p>"; 
        alert('Senha inválida, necessário conter entre 6 a 8 caracteres');  
    }   
}
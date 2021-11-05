function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    console.log(usuario);
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    console.log(dominio);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 2)) {
    document.getElementById("msgemail").innerHTML="E-mail válido";
    } else{
    document.getElementById("msgemail").innerHTML="<font color='red'>Email inválido </font>";
    }
}
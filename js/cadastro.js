function validar() {
  var nome = document.getElementById('nome')
  var email = document.getElementById('email')
  var senha = document.getElementById('senha')
  var confSenha = document.getElementById('confsenha')
  var rg = document.getElementById('rg')

  if (nome.value == '' || /\d/g.test(nome.value)) {
    alert('Nome invalido, preencha novamente!')
    nome.focus()
    return
  }
  if (!validaEmail(email)) {
    alert('E-mail inválido, preencha novamente!')
    email.focus()
    return
  }
  if (senha.value == '' || senha.value.length < 6 || senha.value.length > 8) {
    alert('Senha inválida, necessário conter entre 6 a 8 caracteres')
    senha.focus()
    return
  }
  if (confSenha.value != senha.value) {
    alert('Senha diferente da informada!')
    confSenha.focus()
    return
  }
  if (rg.value == '' || rg.value.length < 9 || rg.value.length > 10) {
    alert('RG inválido, necessário conter entre 9 a 10 caracteres')
    rg.focus()
    return
  }
}

function validaEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf('@'))
  dominio = field.value.substring(
    field.value.indexOf('@') + 1,
    field.value.length
  )
  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search('@') == -1 &&
    dominio.search('@') == -1 &&
    usuario.search(' ') == -1 &&
    dominio.search(' ') == -1 &&
    dominio.search('.') != -1 &&
    dominio.indexOf('.') >= 1 &&
    dominio.lastIndexOf('.') < dominio.length - 2
  ) {
    return true
  }
}

var cadastrar = document.querySelector('button')
cadastrar.onclick = validar
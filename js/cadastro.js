function validar() {
  var nome = document.getElementById('nome')
  var email = document.getElementById('email')
  var senha = document.getElementById('senha')
  var confSenha = document.getElementById('confsenha')
  var rg = document.getElementById('rg')
  var cep = document.getElementById('cep')
  var numero = document.getElementById('n°')

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
    alert('As duas senhas precisam ser iguais!')
    confSenha.focus()
    return
  }
  if (rg.value == '' || rg.value.length < 9 || rg.value.length > 10) {
    alert('RG inválido, necessário conter entre 9 a 10 caracteres')
    rg.focus()
    return
  }
  if (cep.value == '') {
    alert('O campo CEP precisa ser preenchido!')
    cep.focus()
    return
  }
  if (numero.value == '') {
    alert('O campo n° precisa ser preenchido!')
    numero.focus()
    return
  }
  alert('Cadastro efetuado com sucesso, faça seu login.')
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

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById('rua').value = ''
  document.getElementById('bairro').value = ''
  document.getElementById('cidade').value = ''
  document.getElementById('estado').value = ''
}

function meu_callback(conteudo) {
  if (!('erro' in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value = conteudo.logradouro
    document.getElementById('bairro').value = conteudo.bairro
    document.getElementById('cidade').value = conteudo.localidade
    document.getElementById('estado').value = conteudo.uf
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep()
    alert('CEP não encontrado.')
  }
}

function pesquisacep(valor) {
  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, '')

  //Verifica se campo cep possui valor informado.
  if (cep != '') {
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById('rua').value = '...'
      document.getElementById('bairro').value = '...'
      document.getElementById('cidade').value = '...'
      document.getElementById('estado').value = '...'

      //Cria um elemento javascript.
      var script = document.createElement('script')

      //Sincroniza com o callback.
      script.src =
        'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback'

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script)
    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep()
      alert('Formato de CEP inválido.')
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep()
  }
}
var cadastrar = document.querySelector('button')
cadastrar.onclick = validar
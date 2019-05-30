/*
0 Obter um usuario 
1 Obter o numero de telefone de um usuraio a partir de seu ID
2 Obter o endereco do usuario pelo Id
*/

function obterUsuario(callback) {
  setTimeout(function() {
    return callback(null, {
      id: 1,
      nome: 'João',
      dataNascimento: new Date()
    })
  }, 1000)
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: '1199002',
      ddd: 11
    })
  }, 2000)
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0
    })
  }, 2000)
}


obterUsuario((erro, usuario) => {
  if(erro) {
    console.error('DEU RUIM em USUARIO', erro)
    return
  }
  obterTelefone(usuario.id, (erro1, telefone) => {
    if(erro1) {
      console.error('DEU RUIM em TELEFONE', erro1)
      return
    }
    obterEndereco(usuario.id, (erro2, endereco) => {
      if(erro2) {
        console.error('DEU RUIM em TELEFONE', erro1)
        return
      }

      console.log(`
      Nome: ${usuario.nome},
      Endereço: Rua ${endereco.rua} ,${endereco.numero}
      Telefone: (${telefone.ddd})${telefone.telefone}
      `)
    })
  })
})


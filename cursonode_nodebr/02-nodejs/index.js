/*
0 Obter um usuario 
1 Obter o numero de telefone de um usuraio a partir de seu ID
2 Obter o endereco do usuario pelo Id
*/
// importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
  //quando der algum problema -> reject(ERRO)
  //quando obter sucesso -> recolv
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      // return reject(new Error('DEU RUIM DE VERDADE!'))

      return resolve({
        id: 1,
        nome: 'João',
        dataNascimento: new Date()
      })
    }, 1000)
  })
}

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: '1199002',
        ddd: 11
      })
    }, 2000)
  })
  
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0
    })
  }, 2000)
}

const usuarioPromisse = obterUsuario()
// para manipular o sucesso usamos a função .then
// para manipular o erro, usamos o .catch
usuarioPromisse
  .then(function (usuario) {
    return obterTelefone(usuario.id)
      .then(function resolverTelefone(result) {
        return {
          usuario: {
            nome: usuario.nome,
            id: usuario.id
          },
          telefone: result
        }
      })
  })
  .then(function (resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id)
    return endereco.then(function resolverEndereco(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result
      }
    })
  })
  .then(function (resultado) {
    console.log(`
      Nome: ${resultado.usuario.nome}
      Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
      Telefone: (${resultado.telefone.ddd}) ${ resultado.telefone.telefone}  
    `)
  })
  .catch(function (error) {
    console.log('DEU RUIM ', error)
  })


// obterUsuario((erro, usuario) => {
//   if(erro) {
//     console.error('DEU RUIM em USUARIO', erro)
//     return
//   }
//   obterTelefone(usuario.id, (erro1, telefone) => {
//     if(erro1) {
//       console.error('DEU RUIM em TELEFONE', erro1)
//       return
//     }
//     obterEndereco(usuario.id, (erro2, endereco) => {
//       if(erro2) {
//         console.error('DEU RUIM em TELEFONE', erro1)
//         return
//       }

//       console.log(`
//       Nome: ${usuario.nome},
//       Endereço: Rua ${endereco.rua} ,${endereco.numero}
//       Telefone: (${telefone.ddd})${telefone.telefone}
//       `)
//     })
//   })
// })


const axios = require('axios')
const URL = `https://swapi.co/api/people`

async function obterPessoas (nome) {
  const url = `${URL}/?search=${nome}&format=json`
  const reponse = await axios.get(url)
  return reponse.data
}

module.exports = {
  obterPessoas
}
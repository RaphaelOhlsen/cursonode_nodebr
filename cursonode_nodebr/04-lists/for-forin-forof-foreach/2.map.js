const service = require('./service')

async function main () {
  try {
    const result = await service.obterPessoas('a')
    console.time('map')
    const names = result.results.map( pessoa => pessoa.name)
    console.timeEnd('map')
    console.log(names)
  } catch (error) {
    console.error('DEU RUIM', error)
  }
}

main()
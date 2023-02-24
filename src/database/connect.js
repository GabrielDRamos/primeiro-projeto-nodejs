const moongose = require('mongoose')

const connecToDatabase = async () => {
  await moongose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.hv5ukhj.mongodb.net/database?retryWrites=true&w=majority`, (error) => {
    if (error) {
      return console.log('Ocorreu um erro ao se conenctar com o banco de dados :(', error)
    }

    return console.log('Conexão com o banco de dados sucedida!')
  })
}

module.exports = connecToDatabase
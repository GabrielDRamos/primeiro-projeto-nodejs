const path = require('path')

// Apenas o nome do arquivo atual Basename
console.log(path.basename(__filename))
//Nome do diretorio atual
console.log(path.basename(__dirname))
//Nome do diretorio completo atual
console.log(path.dirname(__filename))

// Extensão do arquivo
console.log(path.extname(__filename))

//criar objeto path
console.log(path.parse(__filename))

// juntar caminhos de arquivos
console.log(path.join(__dirname, "teste", "teste.html"))

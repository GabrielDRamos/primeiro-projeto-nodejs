const fs = require('fs')
const path = require('path')

// Criar uma pasta

//fs.mkdir(path.join(__dirname, '/teste'), (error) => {
 // if (error) {
  // return console.log('Erro: ', error)
 // }

 // console.log("Pasta criada com sucesso!")
//})

// Criar um arquivo
fs.writeFile(path.join(__dirname, "/teste" , "test.txt"), "Hello node" , (error) => {
  if (error) {
    return console.log('Error: ', error)
  }
  console.log("sucesso!")

  // adicionar a um arquivo

  fs.appendFile(path.join(__dirname, "/teste", "test.txt"), ", Hello World", (error) => {
    if(error) {
    return console.log('Error ', error)
    }
    console.log("Arquivo modificado!")
     }
    )

  // Ler arquivo
  fs.readFile(path.join(__dirname, "/teste", "test.txt"),"utf8",(error, data) => {
    if (error) {
      return console.log("Erro: ", error)
    }

    console.log(data)
   }
  )

 }
)














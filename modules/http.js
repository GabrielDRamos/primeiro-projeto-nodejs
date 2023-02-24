const http = require('http')
const port = 8080

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.end('<h1>Home Page</h1>')
    res.writeHead(200, {"Content-Type": "text/html"})
  }

  if(req.url === '/users') {
    const users = [
      {
        name: 'John Doe',
        email: 'john@doe.com'
      },
      {
        name: 'Gabriel Duarte',
        email: 'gabriel@gmail.com'
      }
    ]

    res.writeHead(200, {"Content-Type": "application/json"})
    res.end(JSON.stringify(users))
  }
})


server.listen(port, () => console.log(`Escutando na porta ${port}`))


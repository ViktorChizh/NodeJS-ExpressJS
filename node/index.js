const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res)=> {
    // res.writeHead(200, {'Content-Type': 'text/plain charset=utf-8'}) // для текста
    // res.end('Hello Node JS')
    // res.writeHead(200, {'Content-Type': 'text/html charset=utf-8'}) // для html
    // res.end(`<!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <title>Node JS</title>
    //     </head>
    //     <body>
    //         <h1>Hello Node</h1>
    //     </body>
    //     </html>`)
    res.writeHead(200, {'Content-Type': 'text/html charset=utf-8'})
    // const stream = fs.createReadStream('./templates/index.html')  // вывод файла
    // stream.pipe(res)
    if (req.url == '/') fs.createReadStream('./templates/index.html').pipe(res) // вывод в зависимости от url
    else if (req.url == '/about') fs.createReadStream('./templates/about.html').pipe(res)
    else fs.createReadStream('./templates/error.html').pipe(res)
})

const PORT = 3000
const HOST = 'localhost' // '127.0.0.1' - это идентичные записи

server.listen(PORT, HOST, () => {
    console.log(`Сервер запущен: http://${HOST}:${PORT}`)
})
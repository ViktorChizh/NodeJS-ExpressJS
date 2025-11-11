const http = require('http')

let server = http.createServer((req, res)=> {
    // res.writeHead(200, {'Content-Type': 'text/plain charset=utf-8'}) // для текста
    // res.end('Hello Node JS')
    res.writeHead(200, {'Content-Type': 'text/html charset=utf-8'}) // для html
    res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Node JS</title>
        </head>
        <body>
            <h1>Hello Node</h1>
        </body>
        </html>`)
})

const PORT = 3000
const HOST = 'localhost' // '127.0.0.1' - это идентичные записи

server.listen(PORT, HOST, () => {
    console.log(`Сервер запущен: http://${HOST}:${PORT}`)
})
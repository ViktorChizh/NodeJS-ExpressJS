const os = require('os')
let res = os.platform()
console.log(res)

const my_math = require('./my_math')

console.log (my_math.add(5,6))
console.log (my_math.minus(15,6))

const fs = require('fs')
//синхронные
let result = fs.readFileSync('some.txt', 'utf-8')
console.log('синхронный вывод: \n', result)
fs.writeFileSync('some.txt', result + '\nHello')
//асинхронные
fs.readFile('some.txt', 'utf-8', (err, data) => {
    fs.writeFile('some.txt', data + '\nHello World', (err, dt) => {
        console.log('асинхронный вывод: \n', data)
    })
})



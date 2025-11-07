const os = require('os')
let res = os.platform()
console.log(res)

const my_math = require('./my_math')

console.log (my_math.add(5,6))
console.log (my_math.minus(15,6))
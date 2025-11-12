const express = require('express')

const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/index.html') // без шаблонизатора ejs
    res.render('index')
})

app.get('/about', (req, res) => {
    // res.send('This about page') // без шаблонизатора ejs
    res.render('about')
})

app.get('/user/:username/:id', (req, res) => {
    // res.send(`User ID: ${req.params.id} Username: ${req.params.username}`) // без шаблонизатора ejs
    let data = {
        username: req.params.username,
        id: req.params.id,
        hobbies: ['Football', 'Skate', 'Basketball']
    }
    res.render('user', data)
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`server started: http://localhost:${PORT}`)
})
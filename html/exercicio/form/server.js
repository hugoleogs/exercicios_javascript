const express = require('express')

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp, next)=> {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuario Incluido!!!</h1>')
})

app.post('/usuarios/:id', (req, resp, next)=> {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuario Alterado!!!</h1>')
})

app.listen(3003)
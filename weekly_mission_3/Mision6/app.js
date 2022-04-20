const express = require('express')

const app = express()

const puerto = 3000

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/launchx', (req, res) => {
  res.send('Bienvenidos a launchx')
})

app.get('/explorersInNode', (req, res) => {
  const explorer = {name: "alcortes", msg: "Hola"}
  res.send(explorer)
})

app.get('/explorers/:explorerName', (req, res) => {
  res.send(req.params)
})

app.listen(puerto, () => console.log(`Example app listening on port ${puerto}`) )

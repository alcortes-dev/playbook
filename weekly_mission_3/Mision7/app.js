const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json({}))

const port = 3000

app.get('/v1/explorers', (req, res) => {
    const explorer1 = {id: 1, name: 'Explorer 1'}
    const explorer2 = {id: 2, name: 'Explorer 2'}
    const explorer3 = {id: 3, name: 'Explorer 3'}
    const explorer4 = {id: 4, name: 'Explorer 4'}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).send(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
    const explorer = {id: req.params.id, name: `Explorer ${req.params.id}`}
    res.status(200).send(explorer)
})

app.post('/v1/explorers', (req, res) => {
    console.log(req.body)
    console.log(`Creando al usuario con la info: ${req.body}`)
    res.status(201).json({message: 'created'})
})

app.put('/v1/explorers', (req, res) => {
    console.log(req.body)
    console.log(`Actualizando al usuario con la info: ${req.body}`)
    res.status(201).json({message: 'updated'})
})

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(req.body)
    console.log(`Eliminando a usuario con ID: ${req.params.id}`)
    res.status(204).json({message: 'eliminado'})
})



app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`))

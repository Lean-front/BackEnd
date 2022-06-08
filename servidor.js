const express = require('express')
const Contenedor = require('./contenedor.js')

const app = express()
const listaProductos = new Contenedor('./productos.txt')
const PORT = 8080

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

app.get('/productos', async (req, res) => {

    try {
        const items = await listaProductos.getAll()
        res.send(items)
    } catch (error) {
        res.send(error)
    }
})

app.get('/productoRandom', async (req, res) => {

    const items = await listaProductos.getAll()
    const main = Math.floor(Math.random() * items.length)
    res.send(items[main])

})
const Contenedor = require('./contenedor.js')

const ProductosContenedor = new Contenedor('./productos.txt')

const prueba = async () => {

    const objetos = await ProductosContenedor.getAll()
    console.log(objetos)

    // Agregar producto
    await ProductosContenedor.save({ title: "Producto4", price: 600, thumbnail: "", })

    // Encontrar producto por ID
    const itemfind = await ProductosContenedor.getById(4)
    
    // ELiminar producto por ID
    await ProductosContenedor.deleteById(2)
    
    // Vaciar archivo
    await ProductosContenedor.deleteAll()
}

prueba()

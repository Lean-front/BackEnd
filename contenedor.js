const fs = require('fs');

class Contenedor {
    constructor(archivo) {
        this.archivo = archivo
    }

    async getAll() {
        try {
            const lista = await fs.promises.readFile(this.archivo);
            const archivoJson = JSON.parse(lista);
            return archivoJson

        } catch (error) {
            const array = []
            await fs.promises.writeFile(this.archivo, JSON.stringify(array))
            return array
        }
    }

    async save(item) {
        try {
            const items = await this.getAll()

            const newId = items.length === 0 ? 1 : items[items.length - 1].id + 1;
            item.id = newId;
            items.push(item)

            const itemJson = JSON.stringify(items, null, 3)
            await fs.promises.writeFile(this.archivo, itemJson)
            return newId

        } catch (error) {
            return error
        }
    }

    async getById(id) {
        try {
            const items = await this.getAll()
            const findItems = items.find((item) => item.id == id)
            return findItems

        } catch (error) {
            return error
        }
    }

    async deleteById(id) {
        try {
            const items = await this.getAll()
            const newList = items.filter((item) => item.id != id)
            await fs.promises.writeFile(this.archivo, JSON.stringify(newList, null, 3))

            return "Delete"

        } catch (error) {

        }
    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify([]))
        } catch (error) {
            return error
        }
    }
}

module.exports = Contenedor


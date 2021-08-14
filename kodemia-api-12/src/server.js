//definicion de nuestro servidor


const express = require('express')
const kodersRouter = require('./routers/koders')

const server = express()

// middlewares
server.use(express.json())

// agregabamos los router
server.use('/koders', kodersRouter)


module.exports = server

// Requerimiento
// Endpoint GET /koders
// 1. Asegurarnos que nuestro MODELO exista
// 2. Crear el caso de uso necesario.
// 3. Crear el endpoint ->


// POST /koders
// DELETE /koders/:id -> findByIdAndDelete()
// PATCH /koders/:id
// GET /koders/:id



// Practica casi final
// ---- Primera parte ---- obligatoria

// Kodemia necesita poder gestionar mentores
// crear mentores
// - actualizar
// - eliminar
// - obtener el detalle de un mentor por id
// - obtener todos los datos de los mentores

// name
// lastName
// module: ['Maquetado', 'JS', 'Cloud', 'Backend', 'react']
// gender:

// Document Fer:
/*
{
    "name": "Fernanda",
    "lastName": "Palacios",
    "module": ['Maquetado', 'Backend']
    "gender": "Female"
}

*/

// Segunda parte plus
// Referencias.

// Kodemia también necesita gestionar sus células de mentores:
// ¿Qué es una célula de mentores? Es un grupo de mentores que pueden ser asignados
// a un grupo.
// Tiene un nombre que identifica
// Tiene que mentores pertenecen a dicha celula

// Que podamos crear celulas de mentores
//  actualizarlas
// eliminarlas
// obtener detalle
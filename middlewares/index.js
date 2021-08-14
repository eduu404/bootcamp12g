const express = require('express')

const server = express()

//

server.use(express.json())

//Middleware a nivel de aplicación o servidor
server.use((request, rresponse, next) =>{
    console.log('Middleware de aplicación')
})

server.get('/', (req, res) => {
    res.json({
        message: 'Hola koders'
    })
})


server.listen(8080, () =>{
    console.log('Server running')
})


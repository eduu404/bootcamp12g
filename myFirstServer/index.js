const http = require('http');

const server = http.createServer((request, response) => {
    console.log('path: ', request.url)
    console.log('method: ', request.method)
    response.write('hola desde mi servidor Node')
    response.end()
})

server.listen(8080, () => {
    console.log('Server running in http://localhost:8080')
})
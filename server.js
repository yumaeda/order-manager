var jsonServer  = require('json-server'),
    server      = jsonServer.create(),
    router      = jsonServer.router('api.json'),
    middleWares = jsonServer.defaults()

server.use(middleWares)
server.use('/', router)
server.listen(3000, function() {
    console.log('JSON Server is running')
})


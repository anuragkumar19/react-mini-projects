const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults({
    static: path.join(__dirname, 'client', 'build'),
})

const PORT = process.env.PORT || 3001

server.use(middlewares)
server.use(router)

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))

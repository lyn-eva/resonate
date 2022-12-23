import Express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'

const app = Express()
const httpServer = createServer(app)
const io = new Server(httpServer, { cors: { origin: '*' } })

app.use(cors({ credentials: true, origin: true }))
app.use(Express.json())

require('./router/index.route')(app)

httpServer.listen(5000)

io.on('connection', (socket) => {
	console.log('server connected', socket.id)

	socket.on('new_message', (msg) => {
		socket.broadcast.emit(msg.roomId, msg)
	})
})

io.on('new_namespace', (namespace) => {
	console.log('A new namespace: ', namespace.name)
})

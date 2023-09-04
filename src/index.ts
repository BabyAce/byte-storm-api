import dotenv from 'dotenv'
import cors from 'cors'
import { app } from './config/server.js'

dotenv.config()

const PORT = process.env.API_PORT || 8000;

app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`)
})

app.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  origin: true,
  credentials: true,
}))

process.once('SIGUSR2', () => {
  process.kill(process.pid, 'SIGUSR2')
})

process.on('SIGINT', () => {
  process.kill(0)
})

export default app;
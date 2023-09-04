import dotenv from 'dotenv'

import { app } from './config/server.js'

dotenv.config()

const PORT = process.env.API_PORT || 8000;

app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`)
})

process.once('SIGUSR2', () => {
  process.kill(process.pid, 'SIGUSR2')
})

process.on('SIGINT', () => {
  process.kill(0)
})
import dotenv from 'dotenv'

import { app } from './config/server.js'

dotenv.config()

const PORT = process.env.API_PORT || 8000;

app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`)
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
  // Pass to next layer of middleware
  if (req.method === 'OPTIONS') res.sendStatus(200);
  else next();
});

process.once('SIGUSR2', () => {
  process.kill(process.pid, 'SIGUSR2')
})

process.on('SIGINT', () => {
  process.kill(0)
})

export default app;
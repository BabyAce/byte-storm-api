import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'

import { companyRouter } from '../api/routes/company.js'

export const app: Express = express()

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/api/health', (req: Request, res: Response) => {
  res.send('Byte Storm Api is Running...')
})

app.use('/api/company', companyRouter)

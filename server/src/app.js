import express from 'express'
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import logger from './middlewares/logger.js'

const app = express()

app.use(logger)
app.use(helmet())
app.use(cors({ origin: process.env.CORS_ORIGIN || null }))
app.use(compression())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

export default app

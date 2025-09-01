import express from 'express'
import cors from 'cors'
import { applyTrpcToExpressApp } from './lib/trpc'
import { trpcRouter } from './router'

const app = express()

app.use(cors())

app.get('/ping', (req, res) => {
  res.send('pong')
})

applyTrpcToExpressApp(app, trpcRouter)

app.listen(3000, () => {
  console.info('Listening on http://localhost:3000')
})

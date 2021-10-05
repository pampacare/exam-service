import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

app.listen(process.env.PORT ?? 3334, () =>
  console.log('🚀 REST API server ready at: http://localhost:3334')
)

import { Router } from 'express'
import { symptomRoutes } from './symptomRoutes'

const router = Router()

symptomRoutes(router)

export { router }

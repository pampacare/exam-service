import { Router } from 'express'

import { examRoutes } from './exam.routers'

const router = Router()

examRoutes(router)

export { router }

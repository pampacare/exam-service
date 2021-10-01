import { Router } from 'express'
import { examsRoutes } from '../routes/exam.routes';
const router = Router()

examsRoutes(router);

export { router }

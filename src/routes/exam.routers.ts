/* eslint-disable @typescript-eslint/indent */
import { Router } from 'express'

import { RegisterExamController } from '../controllers/exam/RegisterExamController'
const create = new RegisterExamController()

const examRoutes = (router: Router): void => {
    router.post('/register-exam', create.execute.bind(RegisterExamController))
}

export { examRoutes }

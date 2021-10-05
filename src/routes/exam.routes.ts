/* eslint-disable @typescript-eslint/indent */
import { Router } from 'express'
import { FindByDogController } from '../controllers/exams/FindByDogController'
import { RegisterExamController } from '../controllers/exams/RegisterExamController'
const create = new RegisterExamController()
const findByDogController = new FindByDogController()

const examsRoutes = (router: Router): void => {
    router.get('/exam/:dogId', findByDogController.execute.bind(FindByDogController))
    router.post('/register-exam', create.execute.bind(RegisterExamController))
}

export { examsRoutes }

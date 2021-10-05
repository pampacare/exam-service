/* eslint-disable @typescript-eslint/indent */
import { Router } from 'express'
import { FindByDogController } from '../controllers/exams/FindByDogController'
import { RegisterExamController } from '../controllers/exams/RegisterExamController'
import { ReturnSymptomsController } from '../controllers/symptoms/ReturnSymptomsController'
const create = new RegisterExamController()
const findByDogController = new FindByDogController()
const returnSymptomsController = new ReturnSymptomsController()

const examsRoutes = (router: Router): void => {
    router.get('/exam/:dogId', findByDogController.execute.bind(FindByDogController))
    router.post('/register-exam', create.execute.bind(RegisterExamController))
    router.get('/exam/symptoms', returnSymptomsController.execute.bind(ReturnSymptomsController))
}

export { examsRoutes }

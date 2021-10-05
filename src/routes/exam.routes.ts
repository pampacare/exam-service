/* eslint-disable @typescript-eslint/indent */
import { Router } from 'express'
import { FindByDogController } from '../controllers/exams/FindByDogController'
import { RegisterExamController } from '../controllers/exams/RegisterExamController'
import { GetSymptomsController } from '../controllers/symptom/GetSymptomsController'
import { GetTestContoller } from '../controllers/testType/GetTestController'

const getTestContoller = new GetTestContoller()
const getSymptomsController = new GetSymptomsController()
const create = new RegisterExamController()
const findByDogController = new FindByDogController()

const examsRoutes = (router: Router): void => {
    router.get('/exam/:dogId', findByDogController.execute.bind(FindByDogController))
    router.post('/register-exam', create.execute.bind(RegisterExamController))
    router.get('/symptoms', getSymptomsController.execute.bind(GetSymptomsController))
    router.get('/tests', getTestContoller.execute.bind(GetTestContoller))
}

export { examsRoutes }

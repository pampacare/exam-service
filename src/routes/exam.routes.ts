import { Router } from 'express'
import { FindByDogController } from '../controllers/exams/FindByDogController'
const findByDogController = new FindByDogController();

const examsRoutes = (router: Router): void => {
    router.get('/exam/:dogId', findByDogController.execute.bind(FindByDogController))
}

export { examsRoutes }
import { Router } from 'express'
import { GetSymptomsController } from '../controllers/symptom/GetSymptomsController'
const getSymptomsController = new GetSymptomsController()

const symptomRoutes = (router: Router): void => {
  router.get('/symptoms', getSymptomsController.execute.bind(GetSymptomsController))
}

export { symptomRoutes }

import { Router } from 'express'
import { GetSymptomsController } from '../controllers/dogs/GetSymptomsController'

const symptomRoutes = (router: Router): void => {
  router.get('/symptoms', (req, res) => {
    const getSymptomsController = new GetSymptomsController()
    getSymptomsController.execute(req,res)
  })
}

export { symptomRoutes }

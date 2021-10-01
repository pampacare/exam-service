
import { Request,Response } from 'express'
import { prisma } from '../../services/';
class FindByDogController {
  async execute(request: Request, response: Response): Promise<Response> {

    try {
      const dogId = request.params.dogId;
      const exams = await prisma.exam.findMany({
        where: {
          dog_id: dogId
        },
        select: {
          id: true,
          dog_id: true,
          lvc: true,
          observation: true,
          test: true,
          timestamp: true,
          treatment: true,
          symptom_has_exam: true
        }
      })
      return response.json({
        body: exams
      })
    } catch (erro: any) {
      return response.status(400).json({
        message: erro.msg
      })
    }

  }
}
export { FindByDogController }
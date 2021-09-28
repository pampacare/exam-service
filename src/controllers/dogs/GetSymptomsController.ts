import { Request, Response } from 'express'
import { prisma } from '../../services'

class GetSymptomsController {
  async execute (request: Request, response: Response): Promise<Response> {
    try {
      const symptoms = await prisma.symptom.findMany()
      return response.status(201).json(symptoms)
    } catch (error: any) {
      return response.status(400).json({ message: error.message })
    }
  }
}

export { GetSymptomsController }

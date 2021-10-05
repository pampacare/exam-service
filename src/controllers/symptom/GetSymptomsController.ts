/* eslint-disable @typescript-eslint/space-before-function-paren */
import { Response } from 'express'
import { prisma } from '../../services'

class GetSymptomsController {
  async execute(response: Response): Promise<Response> {
    try {
      const symptoms = await prisma.symptom.findMany()
      return response.status(201).json({
        body: symptoms
      })
    } catch (error: any) {
      return response.status(400).json({ message: error.message })
    }
  }
}

export { GetSymptomsController }

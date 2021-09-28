/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/indent */
import { prisma } from '../../services'
import { Request, Response } from 'express'

class RegisterExamController {
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const { lvc, dogId, observation, symptomExamId } = request.body

            const createExam = await prisma.exam.create({
                data: {
                    lvc: lvc,
                    timestamp: new Date(),
                    dog_id: dogId,
                    observation: observation
                }
            })

            symptomExamId.forEach(async (symptomId: any) => {
                await prisma.symptom_has_exam.create({
                    data: {
                        exam_id: createExam.id,
                        symptom_id: symptomId
                    }
                })
            })

            return response.status(201).json({
                body: createExam,
                message: 'Exame cadastrado com sucesso'
            })
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            })
        }
    }
}

export { RegisterExamController }

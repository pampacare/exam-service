/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/indent */
import { Request, Response } from 'express'
import { prisma } from '../../services/'
class ReturnSymptomsController {
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const exams = await prisma.symptom.findMany({
                select: {
                    id: true,
                    description: true
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
export { ReturnSymptomsController }

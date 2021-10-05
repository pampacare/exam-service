/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/space-before-function-paren */
import { Request, Response } from 'express'
import { prisma } from '../../services'

class GetTestContoller {
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const testsType = await prisma.test_type.findMany({
                select: {
                    id: true,
                    name: true
                }
            })
            return response.status(201).json({
                body: testsType
            })
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            })
        }
    }
}

export { GetTestContoller }

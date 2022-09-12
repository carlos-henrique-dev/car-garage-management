import { Request, Response } from 'express'
import { ICreateCostumerDTO } from '../dtos'
import { ICreateCostumerService } from '../interfaces'
import { injectable, inject } from 'tsyringe'
import { IRequest } from '../../../shared/interfaces/request'

@injectable()
export class CreateCostumerController {
  private createCostumerService: ICreateCostumerService

  constructor(
    @inject('CreateCostumerService')
    createCostumerService: ICreateCostumerService
  ) {
    this.createCostumerService = createCostumerService
  }

  async handle(req: IRequest<ICreateCostumerDTO>, res: Response): Promise<Response> {
    try {
      const { name, email } = req.body

      const costumer = await this.createCostumerService.execute({ name, email })

      return res.status(201).json(costumer)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

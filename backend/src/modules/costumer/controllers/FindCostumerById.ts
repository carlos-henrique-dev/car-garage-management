import { Request, Response } from 'express'
import { IFindOneCostumerDTO } from '../dtos'
import { IFindOneCostumerService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindCostumerByIdController {
  private findCostumerService: IFindOneCostumerService

  constructor(
    @inject('FindOneCostumerService')
    findCostumerService: IFindOneCostumerService
  ) {
    this.findCostumerService = findCostumerService
  }

  async handle(req: Request<IFindOneCostumerDTO>, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      const costumer = await this.findCostumerService.execute({ id })

      return res.status(201).json(costumer)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

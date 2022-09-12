import { Request, Response } from 'express'
import { IUpdateCostumerDTO } from '../dtos'
import { IDeleteCostumerService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class DeleteCostumerController {
  private deleteCostumerService: IDeleteCostumerService

  constructor(
    @inject('DeleteCostumerService')
    deleteCostumerService: IDeleteCostumerService
  ) {
    this.deleteCostumerService = deleteCostumerService
  }

  async handle(req: Request<{ id: string }>, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      await this.deleteCostumerService.execute({ id })

      return res.status(201).json({ message: 'Costumer deleted' })
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

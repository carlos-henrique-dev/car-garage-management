import { Request, Response } from 'express'
import { IUpdateCostumerDTO } from '../dtos'
import { IUpdateCostumerService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class UpdateCostumerController {
  private updateCostumerService: IUpdateCostumerService

  constructor(
    @inject('UpdateCostumerService')
    updateCostumerService: IUpdateCostumerService
  ) {
    this.updateCostumerService = updateCostumerService
  }

  async handle(req: Request<{ id: string }, IUpdateCostumerDTO>, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const { name, email } = req.body

      const costumer = await this.updateCostumerService.execute({ data: { name, email }, id })

      return res.status(201).json({ costumer })
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

import { Request, Response } from 'express'
import { IUpdateRepairDTO } from '../dtos'
import { IUpdateRepairService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class UpdateRepairController {
  private updateRepairService: IUpdateRepairService

  constructor(
    @inject('UpdateRepairService')
    updateRepairService: IUpdateRepairService
  ) {
    this.updateRepairService = updateRepairService
  }

  async handle(req: Request<{ id: string }, IUpdateRepairDTO>, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const { car, brand, costumer, carParts, employee, occurrenceDate, description } = req.body

      const repair = await this.updateRepairService.execute({ data: { car, brand, costumer, carParts, employee, occurrenceDate, description }, id })

      return res.status(201).json(repair)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

import { Request, Response } from 'express'
import { IUpdateRepairDTO } from '../dtos'
import { IFindOneRepairService, IUpdateRepairService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class UpdateRepairController {
  private updateRepairService: IUpdateRepairService
  private findOneRepairService: IFindOneRepairService

  constructor(
    @inject('UpdateRepairService')
    updateRepairService: IUpdateRepairService,
    @inject('FindOneRepairService')
    findOneRepairService: IFindOneRepairService
  ) {
    this.updateRepairService = updateRepairService
    this.findOneRepairService = findOneRepairService
  }

  async handle(req: Request<{ id: string }, IUpdateRepairDTO>, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const { car, brand, costumer, carParts, employee, occurrenceDate, description } = req.body

      await this.updateRepairService.execute({ data: { car, brand, costumer, carParts, employee, occurrenceDate, description }, id })

      const repair = await this.findOneRepairService.execute({ id })

      return res.status(201).json(repair)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

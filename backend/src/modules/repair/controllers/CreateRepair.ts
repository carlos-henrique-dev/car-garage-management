import { Request, Response } from 'express'
import { ICreateRepairDTO } from '../dtos'
import { ICreateRepairService, IFindOneRepairService } from '../interfaces'
import { injectable, inject } from 'tsyringe'
import { IRequest } from '../../../shared/interfaces/request'

@injectable()
export class CreateRepairController {
  private createRepairService: ICreateRepairService
  private findOneRepairService: IFindOneRepairService

  constructor(
    @inject('CreateRepairService')
    createRepairService: ICreateRepairService,

    @inject('FindOneRepairService')
    findOneRepairService: IFindOneRepairService
  ) {
    this.createRepairService = createRepairService
    this.findOneRepairService = findOneRepairService
  }

  async handle(req: IRequest<ICreateRepairDTO>, res: Response): Promise<Response> {
    try {
      const { car, brand, costumer, carParts, employee, occurrenceDate = new Date(), description, total } = req.body

      const createdRepair = await this.createRepairService.execute({ car, brand, costumer, carParts, employee, occurrenceDate, description, total })

      const repair = await this.findOneRepairService.execute({ id: createdRepair?._id })

      return res.status(201).json(repair)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

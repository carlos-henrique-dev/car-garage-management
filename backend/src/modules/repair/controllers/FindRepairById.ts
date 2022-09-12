import { Request, Response } from 'express'
import { IFindOneRepairDTO } from '../dtos'
import { IFindOneRepairService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindRepairByIdController {
  private findRepairService: IFindOneRepairService

  constructor(
    @inject('FindOneRepairService')
    findRepairService: IFindOneRepairService
  ) {
    this.findRepairService = findRepairService
  }

  async handle(req: Request<IFindOneRepairDTO>, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      const Repair = await this.findRepairService.execute({ id })

      return res.status(201).json(Repair)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

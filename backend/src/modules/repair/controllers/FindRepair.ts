import { Request, Response } from 'express'
import { IFindRepairsService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindRepairsController {
  private findRepairsService: IFindRepairsService

  constructor(
    @inject('FindRepairService')
    findRepairsService: IFindRepairsService
  ) {
    this.findRepairsService = findRepairsService
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const Repairs = await this.findRepairsService.execute()

      return res.status(200).json(Repairs)
    } catch (err: any) {
      console.error(err)
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

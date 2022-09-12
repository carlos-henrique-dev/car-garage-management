import { Request, Response } from 'express'
import { IFindCarsService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindCarsController {
  private findCarsService: IFindCarsService

  constructor(
    @inject('FindCarService')
    findCarsService: IFindCarsService
  ) {
    this.findCarsService = findCarsService
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const Cars = await this.findCarsService.execute()

      return res.status(200).json(Cars)
    } catch (err: any) {
      console.error(err)
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

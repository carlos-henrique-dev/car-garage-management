import { Request, Response } from 'express'
import { IFindCarPartsService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindCarPartsController {
  private findCarPartsService: IFindCarPartsService

  constructor(
    @inject('FindCarPartService')
    findCarPartsService: IFindCarPartsService
  ) {
    this.findCarPartsService = findCarPartsService
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const carParts = await this.findCarPartsService.execute()

      return res.status(200).json(carParts)
    } catch (err: any) {
      console.error(err)
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

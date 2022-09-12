import { Request, Response } from 'express'
import { IFindOneCarPartDTO } from '../dtos'
import { IFindOneCarPartService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindCarPartByIdController {
  private findCarPartService: IFindOneCarPartService

  constructor(
    @inject('FindOneCarPartService')
    findCarPartService: IFindOneCarPartService
  ) {
    this.findCarPartService = findCarPartService
  }

  async handle(req: Request<IFindOneCarPartDTO>, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      const CarPart = await this.findCarPartService.execute({ id })

      return res.status(201).json(CarPart)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

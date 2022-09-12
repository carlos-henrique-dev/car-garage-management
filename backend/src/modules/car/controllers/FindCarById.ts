import { Request, Response } from 'express'
import { IFindOneCarDTO } from '../dtos'
import { IFindOneCarService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindCarByIdController {
  private findCarService: IFindOneCarService

  constructor(
    @inject('FindOneCarService')
    findCarService: IFindOneCarService
  ) {
    this.findCarService = findCarService
  }

  async handle(req: Request<IFindOneCarDTO>, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      const Car = await this.findCarService.execute({ id })

      return res.status(201).json(Car)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

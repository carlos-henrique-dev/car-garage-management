import { Response } from 'express'
import { ICreateCarDTO } from '../dtos'
import { ICreateCarService, IFindOneCarService } from '../interfaces'
import { injectable, inject } from 'tsyringe'
import { IRequest } from '../../../shared/interfaces/request'

@injectable()
export class CreateCarController {
  private createCarService: ICreateCarService
  private findOneCarService: IFindOneCarService

  constructor(
    @inject('CreateCarService')
    createCarService: ICreateCarService,
    @inject('FindOneCarService')
    findOneCarService: IFindOneCarService
  ) {
    this.createCarService = createCarService
    this.findOneCarService = findOneCarService
  }

  async handle(req: IRequest<ICreateCarDTO>, res: Response): Promise<Response> {
    try {
      const { name, brand, costumer, registrationPlate, model } = req.body

      await this.createCarService.execute({ name, brand, model, costumer, registrationPlate })

      const car = await this.findOneCarService.execute({ registrationPlate })

      return res.status(201).json(car)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

import { Request, Response } from 'express'
import { ICreateCarDTO } from '../dtos'
import { ICreateCarService } from '../interfaces'
import { injectable, inject } from 'tsyringe'
import { IRequest } from '../../../shared/interfaces/request'

@injectable()
export class CreateCarController {
  private createCarService: ICreateCarService

  constructor(
    @inject('CreateCarService')
    createCarService: ICreateCarService
  ) {
    this.createCarService = createCarService
  }

  async handle(req: IRequest<ICreateCarDTO>, res: Response): Promise<Response> {
    try {
      const { name, brand, costumer, registrationPlate, model } = req.body

      const Car = await this.createCarService.execute({ name, brand, model, costumer, registrationPlate })

      return res.status(201).json(Car)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

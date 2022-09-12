import { Request, Response } from 'express'
import { IUpdateCarDTO } from '../dtos'
import { IUpdateCarService } from '../interfaces'
import { injectable, inject } from 'tsyringe'
import { IRequest } from '../../../shared/interfaces/request'

@injectable()
export class UpdateCarController {
  private updateCarService: IUpdateCarService

  constructor(
    @inject('UpdateCarService')
    updateCarService: IUpdateCarService
  ) {
    this.updateCarService = updateCarService
  }

  async handle(req: IRequest<IUpdateCarDTO>, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const { brand, costumer, model, registrationPlate } = req.body

      const car = await this.updateCarService.execute({ data: { brand, costumer, model, registrationPlate }, id })

      return res.status(201).json(car)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

import { Request, Response } from 'express'
import { injectable, inject } from 'tsyringe'
import { IFindCarsByCostumerService } from '../interfaces/IFindCarsByCostumerService'
import { IFindCarByCostumerDTO } from '../dtos/IFindCarByCostumer'

@injectable()
export class FindCarByCostumerController {
  private findCarsByCostumerService: IFindCarsByCostumerService

  constructor(
    @inject('FindCarsByCostumerService')
    findCarsByCostumerService: IFindCarsByCostumerService
  ) {
    this.findCarsByCostumerService = findCarsByCostumerService
  }

  async handle(req: Request<IFindCarByCostumerDTO>, res: Response): Promise<Response> {
    try {
      const { costumer } = req.params

      const car = await this.findCarsByCostumerService.execute({ costumer: costumer })

      return res.status(201).json(car)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

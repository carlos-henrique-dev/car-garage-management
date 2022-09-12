import { Request, Response } from 'express'
import { IFindCostumersService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindCostumersController {
  private findCostumersService: IFindCostumersService

  constructor(
    @inject('FindCostumerService')
    findCostumersService: IFindCostumersService
  ) {
    this.findCostumersService = findCostumersService
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const costumer = await this.findCostumersService.execute()

      return res.status(200).json(costumer)
    } catch (err: any) {
      console.error(err)
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

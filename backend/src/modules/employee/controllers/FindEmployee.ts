import { Request, Response } from 'express'
import { IFindEmployeesService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindEmployeesController {
  private findEmployeesService: IFindEmployeesService

  constructor(
    @inject('FindEmployeeService')
    findEmployeesService: IFindEmployeesService
  ) {
    this.findEmployeesService = findEmployeesService
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const Employee = await this.findEmployeesService.execute()

      return res.status(200).json(Employee)
    } catch (err: any) {
      console.error(err)
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

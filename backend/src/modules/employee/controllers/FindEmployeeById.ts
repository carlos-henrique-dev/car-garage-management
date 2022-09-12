import { Request, Response } from 'express'
import { IFindOneEmployeeDTO } from '../dtos'
import { IFindOneEmployeeService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindEmployeeByIdController {
  private findEmployeeService: IFindOneEmployeeService

  constructor(
    @inject('FindOneEmployeeService')
    findEmployeeService: IFindOneEmployeeService
  ) {
    this.findEmployeeService = findEmployeeService
  }

  async handle(req: Request<IFindOneEmployeeDTO>, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      const Employee = await this.findEmployeeService.execute({ id })

      return res.status(201).json(Employee)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

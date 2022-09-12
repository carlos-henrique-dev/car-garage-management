import { Request, Response } from 'express'
import { ICreateEmployeeDTO } from '../dtos'
import { ICreateEmployeeService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class CreateEmployeeController {
  private createEmployeeService: ICreateEmployeeService

  constructor(
    @inject('CreateEmployeeService')
    createEmployeeService: ICreateEmployeeService
  ) {
    this.createEmployeeService = createEmployeeService
  }

  async handle(req: Request<ICreateEmployeeDTO>, res: Response): Promise<Response> {
    try {
      const { name, email, hiringDate = new Date() } = req.body

      const Employee = await this.createEmployeeService.execute({ name, email, hiringDate })

      return res.status(201).json(Employee)
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error.',
      })
    }
  }
}

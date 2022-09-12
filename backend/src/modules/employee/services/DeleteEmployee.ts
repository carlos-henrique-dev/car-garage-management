import { IEmployeeRepository, IDeleteEmployeeService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class DeleteEmployeeService implements IDeleteEmployeeService {
  private EmployeeRepository: IEmployeeRepository

  constructor(
    @inject('EmployeeRepository')
    EmployeeRepository: IEmployeeRepository
  ) {
    this.EmployeeRepository = EmployeeRepository
  }

  async execute(params: IDeleteEmployeeService.Params): IDeleteEmployeeService.Result {
    const { id } = params

    const Employee = await this.EmployeeRepository.findOne({ id: params.id })

    if (!Employee) {
      throw new Error('Employee not found')
    }

    return this.EmployeeRepository.delete(id)
  }
}

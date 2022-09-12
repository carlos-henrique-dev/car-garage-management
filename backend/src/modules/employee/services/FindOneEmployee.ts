import { IEmployeeRepository, IFindOneEmployeeService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class FindOneEmployeeService implements IFindOneEmployeeService {
  private EmployeeRepository: IEmployeeRepository

  constructor(
    @inject('EmployeeRepository')
    EmployeeRepository: IEmployeeRepository
  ) {
    this.EmployeeRepository = EmployeeRepository
  }

  async execute(data: IFindOneEmployeeService.Params): IFindOneEmployeeService.Result {
    const Employee = await this.EmployeeRepository.findOne(data)

    return Employee
  }
}

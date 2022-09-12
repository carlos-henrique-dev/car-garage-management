import { IEmployeeRepository, ICreateEmployeeService } from '../interfaces'
import { injectable, inject } from 'tsyringe'

@injectable()
export class CreateEmployeeService implements ICreateEmployeeService {
  private EmployeeRepository: IEmployeeRepository

  constructor(
    @inject('EmployeeRepository')
    EmployeeRepository: IEmployeeRepository
  ) {
    this.EmployeeRepository = EmployeeRepository
  }

  async execute(data: ICreateEmployeeService.Params): ICreateEmployeeService.Result {
    const EmployeeAlreadyExists = await this.EmployeeRepository.findOne({ email: data.email })

    if (EmployeeAlreadyExists) {
      throw new Error('A Employee with this email already exists')
    }

    const Employee = await this.EmployeeRepository.save(data)

    return Employee
  }
}

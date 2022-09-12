import { Request, Router } from 'express'
import { CreateEmployeeController, DeleteEmployeeController, FindEmployeeByIdController, FindEmployeesController, UpdateEmployeeController } from '../controllers'
import { ICreateEmployeeDTO, IFindOneEmployeeDTO, IUpdateEmployeeDTO } from '../dtos'
import { container } from 'tsyringe'

const router = Router()

router.post('/employee', (req: Request<ICreateEmployeeDTO>, res) => container.resolve(CreateEmployeeController).handle(req, res))

router.get('/employee', (req: Request, res) => container.resolve(FindEmployeesController).handle(req, res))

router.get('/employee/:id', (req: Request<IFindOneEmployeeDTO>, res) => container.resolve(FindEmployeeByIdController).handle(req, res))

router.put('/employee/:id', (req: Request<{ id: string }, IUpdateEmployeeDTO>, res) => container.resolve(UpdateEmployeeController).handle(req, res))

router.delete('/employee/:id', (req: Request<{ id: string }>, res) => container.resolve(DeleteEmployeeController).handle(req, res))

export { router as EmployeeRoutes }

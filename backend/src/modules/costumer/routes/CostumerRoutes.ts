import { Request, Router } from 'express'
import { CreateCostumerController, DeleteCostumerController, FindCostumerByIdController, FindCostumersController, UpdateCostumerController } from '../controllers'
import { ICreateCostumerDTO, IFindOneCostumerDTO, IUpdateCostumerDTO } from '../dtos'
import { container } from 'tsyringe'
import { IRequest } from '../../../shared/interfaces/request'

const router = Router()

router.post('/costumer', (req: IRequest<ICreateCostumerDTO>, res) => container.resolve(CreateCostumerController).handle(req, res))

router.get('/costumer', (req: Request, res) => container.resolve(FindCostumersController).handle(req, res))

router.get('/costumer/:id', (req: Request<IFindOneCostumerDTO>, res) => container.resolve(FindCostumerByIdController).handle(req, res))

router.put('/costumer/:id', (req: Request<{ id: string }, IUpdateCostumerDTO>, res) => container.resolve(UpdateCostumerController).handle(req, res))

router.delete('/costumer/:id', (req: Request<{ id: string }>, res) => container.resolve(DeleteCostumerController).handle(req, res))

export { router as CostumerRoutes }

import { Request, Router } from 'express'
import { CreateRepairController, DeleteRepairController, FindRepairByIdController, FindRepairsController, UpdateRepairController } from '../controllers'
import { ICreateRepairDTO, IFindOneRepairDTO, IUpdateRepairDTO } from '../dtos'
import { container } from 'tsyringe'
import { IRequest } from '../../../shared/interfaces/request'

const router = Router()

router.post('/repair', (req: IRequest<ICreateRepairDTO>, res) => container.resolve(CreateRepairController).handle(req, res))

router.get('/repair', (req: Request, res) => container.resolve(FindRepairsController).handle(req, res))

router.get('/repair/:id', (req: Request<IFindOneRepairDTO>, res) => container.resolve(FindRepairByIdController).handle(req, res))

router.put('/repair/:id', (req: Request<{ id: string }, IUpdateRepairDTO>, res) => container.resolve(UpdateRepairController).handle(req, res))

router.delete('/repair/:id', (req: Request<{ id: string }>, res) => container.resolve(DeleteRepairController).handle(req, res))

export { router as RepairRoutes }

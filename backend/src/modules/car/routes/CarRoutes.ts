import { Request, Router } from 'express'
import { CreateCarController, DeleteCarController, FindCarByIdController, FindCarsController, UpdateCarController } from '../controllers'
import { ICreateCarDTO, IFindOneCarDTO, IUpdateCarDTO } from '../dtos'
import { container } from 'tsyringe'
import { IRequest } from '../../../shared/interfaces/request'
import { FindCarByCostumerController } from '../controllers/FindCarByCostumer'
import { IFindCarByCostumerDTO } from '../dtos/IFindCarByCostumer'

const router = Router()

router.post('/car', (req: IRequest<ICreateCarDTO>, res) => container.resolve(CreateCarController).handle(req, res))

router.get('/car', (req: Request, res) => container.resolve(FindCarsController).handle(req, res))

router.get('/costumer-car/:costumer', (req: Request<IFindCarByCostumerDTO>, res) => container.resolve(FindCarByCostumerController).handle(req, res))

router.get('/car/:id', (req: Request<IFindOneCarDTO>, res) => container.resolve(FindCarByIdController).handle(req, res))

router.put('/car/:id', (req: Request<{ id: string }, IUpdateCarDTO>, res) => container.resolve(UpdateCarController).handle(req, res))

router.delete('/car/:id', (req: Request<{ id: string }>, res) => container.resolve(DeleteCarController).handle(req, res))

export { router as CarRoutes }

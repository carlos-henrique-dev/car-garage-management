import { Request, Router } from 'express'
import { CreateCarPartController, DeleteCarPartController, FindCarPartByIdController, FindCarPartsController, UpdateCarPartController } from '../controllers'
import { ICreateCarPartDTO, IFindOneCarPartDTO, IUpdateCarPartDTO } from '../dtos'
import { container } from 'tsyringe'

const router = Router()

router.post('/car-part', (req: Request<ICreateCarPartDTO>, res) => container.resolve(CreateCarPartController).handle(req, res))

router.get('/car-part', (req: Request, res) => container.resolve(FindCarPartsController).handle(req, res))

router.get('/car-part/:id', (req: Request<IFindOneCarPartDTO>, res) => container.resolve(FindCarPartByIdController).handle(req, res))

router.put('/car-part/:id', (req: Request<{ id: string }, IUpdateCarPartDTO>, res) => container.resolve(UpdateCarPartController).handle(req, res))

router.delete('/car-part/:id', (req: Request<{ id: string }>, res) => container.resolve(DeleteCarPartController).handle(req, res))

export { router as CarPartRoutes }

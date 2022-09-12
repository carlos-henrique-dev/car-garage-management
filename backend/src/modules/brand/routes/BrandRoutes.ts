import { Request, Router } from 'express'
import { CreateBrandController, DeleteBrandController, FindBrandByIdController, FindBrandsController, UpdateBrandController } from '../controllers'
import { ICreateBrandDTO, IFindOneBrandDTO, IUpdateBrandDTO } from '../dtos'
import { container } from 'tsyringe'
import { IRequest } from '../../../shared/interfaces/request'

const router = Router()

router.post('/brand', (req: IRequest<ICreateBrandDTO>, res) => container.resolve(CreateBrandController).handle(req, res))

router.get('/brand', (req: Request, res) => container.resolve(FindBrandsController).handle(req, res))

router.get('/brand/:id', (req: Request<IFindOneBrandDTO>, res) => container.resolve(FindBrandByIdController).handle(req, res))

router.put('/brand/:id', (req: Request<{ id: string }, IUpdateBrandDTO>, res) => container.resolve(UpdateBrandController).handle(req, res))

router.delete('/brand/:id', (req: Request<{ id: string }>, res) => container.resolve(DeleteBrandController).handle(req, res))

export { router as BrandRoutes }

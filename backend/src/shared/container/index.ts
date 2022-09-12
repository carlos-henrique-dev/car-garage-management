import { container } from 'tsyringe'

import { ICostumerRepository, ICreateCostumerService, IDeleteCostumerService, IFindCostumersService, IFindOneCostumerService, IUpdateCostumerService } from '../../modules/costumer/interfaces'
import { CostumerRepository } from '../../modules/costumer/repositories'
import { CreateCostumerService, DeleteCostumerService, FindCostumersService, FindOneCostumerService, UpdateCostumerService } from '../../modules/costumer/services'

import { IBrandRepository, ICreateBrandService, IUpdateBrandService, IFindOneBrandService, IFindBrandsService, IDeleteBrandService } from '../../modules/brand/interfaces'
import { BrandRepository } from '../../modules/brand/repositories'
import { CreateBrandService, UpdateBrandService, FindOneBrandService, FindBrandsService, DeleteBrandService } from '../../modules/brand/services'

// Costumer Dependency Injection
container.register<ICostumerRepository>('CostumerRepository', CostumerRepository)
container.register<ICreateCostumerService>('CreateCostumerService', CreateCostumerService)
container.register<IUpdateCostumerService>('UpdateCostumerService', UpdateCostumerService)
container.register<IFindOneCostumerService>('FindOneCostumerService', FindOneCostumerService)
container.register<IFindCostumersService>('FindCostumerService', FindCostumersService)
container.register<IDeleteCostumerService>('DeleteCostumerService', DeleteCostumerService)

// Brand Dependency Injection
container.register<IBrandRepository>('BrandRepository', BrandRepository)
container.register<ICreateBrandService>('CreateBrandService', CreateBrandService)
container.register<IUpdateBrandService>('UpdateBrandService', UpdateBrandService)
container.register<IFindOneBrandService>('FindOneBrandService', FindOneBrandService)
container.register<IFindBrandsService>('FindBrandService', FindBrandsService)
container.register<IDeleteBrandService>('DeleteBrandService', DeleteBrandService)

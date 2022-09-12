import { ICostumerRepository, ICreateCostumerService, IDeleteCostumerService, IFindCostumersService, IFindOneCostumerService, IUpdateCostumerService } from '../../modules/costumer/interfaces'
import { CostumerRepository } from '../../modules/costumer/repositories'
import { CreateCostumerService, DeleteCostumerService, FindCostumersService, FindOneCostumerService, UpdateCostumerService } from '../../modules/costumer/services'
import { container } from 'tsyringe'

container.register<ICostumerRepository>('CostumerRepository', CostumerRepository)
container.register<ICreateCostumerService>('CreateCostumerService', CreateCostumerService)
container.register<IUpdateCostumerService>('UpdateCostumerService', UpdateCostumerService)
container.register<IFindOneCostumerService>('FindOneCostumerService', FindOneCostumerService)
container.register<IFindCostumersService>('FindCostumerService', FindCostumersService)
container.register<IDeleteCostumerService>('DeleteCostumerService', DeleteCostumerService)

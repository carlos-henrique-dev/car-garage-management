import { container } from 'tsyringe'

import { ICostumerRepository, ICreateCostumerService, IDeleteCostumerService, IFindCostumersService, IFindOneCostumerService, IUpdateCostumerService } from '../../modules/costumer/interfaces'
import { CostumerRepository } from '../../modules/costumer/repositories'
import { CreateCostumerService, DeleteCostumerService, FindCostumersService, FindOneCostumerService, UpdateCostumerService } from '../../modules/costumer/services'

import { IBrandRepository, ICreateBrandService, IUpdateBrandService, IFindOneBrandService, IFindBrandsService, IDeleteBrandService } from '../../modules/brand/interfaces'
import { BrandRepository } from '../../modules/brand/repositories'
import { CreateBrandService, UpdateBrandService, FindOneBrandService, FindBrandsService, DeleteBrandService } from '../../modules/brand/services'

import { ICarPartRepository, ICreateCarPartService, IUpdateCarPartService, IFindOneCarPartService, IFindCarPartsService, IDeleteCarPartService } from '../../modules/car-part/interfaces'
import { CarPartRepository } from '../../modules/car-part/repositories'
import { CreateCarPartService, UpdateCarPartService, FindOneCarPartService, FindCarPartsService, DeleteCarPartService } from '../../modules/car-part/services'

import { IEmployeeRepository, ICreateEmployeeService, IUpdateEmployeeService, IFindOneEmployeeService, IFindEmployeesService, IDeleteEmployeeService } from '../../modules/employee/interfaces'
import { EmployeeRepository } from '../../modules/employee/repositories'
import { CreateEmployeeService, UpdateEmployeeService, FindOneEmployeeService, FindEmployeesService, DeleteEmployeeService } from '../../modules/employee/services'

import { ICarRepository, ICreateCarService, IUpdateCarService, IFindOneCarService, IFindCarsService, IDeleteCarService } from '../../modules/car/interfaces'
import { CarRepository } from '../../modules/car/repositories'
import { CreateCarService, UpdateCarService, FindOneCarService, FindCarsService, DeleteCarService } from '../../modules/car/services'
import { IFindCarsByCostumerService } from '../../modules/car/interfaces/IFindCarsByCostumerService'
import { FindByCostumerService } from '../../modules/car/services/FindByCostumer'

import { ICreateRepairService, IUpdateRepairService, IFindOneRepairService, IFindRepairsService, IDeleteRepairService, IRepairRepository } from '../../modules/repair/interfaces'
import { RepairRepository } from '../../modules/repair/repositories'
import { CreateRepairService, UpdateRepairService, FindOneRepairService, FindRepairsService, DeleteRepairService } from '../../modules/repair/services'

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

// Car Part Dependency Injection
container.register<ICarPartRepository>('CarPartRepository', CarPartRepository)
container.register<ICreateCarPartService>('CreateCarPartService', CreateCarPartService)
container.register<IUpdateCarPartService>('UpdateCarPartService', UpdateCarPartService)
container.register<IFindOneCarPartService>('FindOneCarPartService', FindOneCarPartService)
container.register<IFindCarPartsService>('FindCarPartService', FindCarPartsService)
container.register<IDeleteCarPartService>('DeleteCarPartService', DeleteCarPartService)
container.register<IFindCarsByCostumerService>('FindCarsByCostumerService', FindByCostumerService)

// Employee Dependency Injection
container.register<IEmployeeRepository>('EmployeeRepository', EmployeeRepository)
container.register<ICreateEmployeeService>('CreateEmployeeService', CreateEmployeeService)
container.register<IUpdateEmployeeService>('UpdateEmployeeService', UpdateEmployeeService)
container.register<IFindOneEmployeeService>('FindOneEmployeeService', FindOneEmployeeService)
container.register<IFindEmployeesService>('FindEmployeeService', FindEmployeesService)
container.register<IDeleteEmployeeService>('DeleteEmployeeService', DeleteEmployeeService)

// Car Dependency Injection
container.register<ICarRepository>('CarRepository', CarRepository)
container.register<ICreateCarService>('CreateCarService', CreateCarService)
container.register<IUpdateCarService>('UpdateCarService', UpdateCarService)
container.register<IFindOneCarService>('FindOneCarService', FindOneCarService)
container.register<IFindCarsService>('FindCarService', FindCarsService)
container.register<IDeleteCarService>('DeleteCarService', DeleteCarService)

// Repair Dependency Injection
container.register<IRepairRepository>('RepairRepository', RepairRepository)
container.register<ICreateRepairService>('CreateRepairService', CreateRepairService)
container.register<IUpdateRepairService>('UpdateRepairService', UpdateRepairService)
container.register<IFindOneRepairService>('FindOneRepairService', FindOneRepairService)
container.register<IFindRepairsService>('FindRepairService', FindRepairsService)
container.register<IDeleteRepairService>('DeleteRepairService', DeleteRepairService)

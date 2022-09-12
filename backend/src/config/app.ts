import express, { Express, Request, Response } from 'express'
import logger from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

import { CostumerRoutes } from '../modules/costumer/routes'
import { BrandRoutes } from '../modules/brand/routes'
import { CarPartRoutes } from '../modules/car-part/routes'
import { EmployeeRoutes } from '../modules/employee/routes'
import { CarRoutes } from '../modules/car/routes'

const app: Express = express()

app.use(cors())
app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req: Request, res: Response) => res.send('Garage Management'))

app.use(CostumerRoutes)
app.use(BrandRoutes)
app.use(CarPartRoutes)
app.use(EmployeeRoutes)
app.use(CarRoutes)

export { app }

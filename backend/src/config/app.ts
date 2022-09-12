import express, { Express, Request, Response } from 'express'
import logger from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

import { costumerRoutes } from '../modules/costumer/routes'

const app: Express = express()

app.use(cors())
app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req: Request, res: Response) => res.send('Garage Management'))

app.use(costumerRoutes)

export { app }

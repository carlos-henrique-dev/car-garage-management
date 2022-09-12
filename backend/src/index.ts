import 'reflect-metadata'

import * as dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import './shared/container'
import { app } from './config/app'

const startServer = () => {
  try {
    const port = process.env.PORT || 3000

    mongoose.connect(
      'mongodb://admin:S3cret@garage_database:27017/garage-db',
      {
        ssl: false,
        directConnection: true,
        authSource: 'admin',
        readPreference: 'primary',
      },
      (err) => {
        if (mongoose.connection.readyState === 1) console.log('🏦 Connected to the database!')

        if (err) console.error('🚫 Mongo Connection error', err)
      }
    )

    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

startServer()

import { config } from 'dotenv'
config()

export const db = {
  dbname: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
}

export const PORT = process.env.PORT
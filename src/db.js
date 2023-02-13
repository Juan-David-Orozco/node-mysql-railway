import { createPool } from 'mysql2/promise'
import { db } from './config.js'

export const pool = createPool({
  user: db.user,
  password: db.password,
  host: db.host,
  database: db.dbname,
  port: db.port
})
import express from 'express'
import { pool } from './db.js'

const app = express()

app.get('/', async (req, res) => {
  const result = await pool.query(`SELECT * FROM users`)
  res.json(result[0])
})

app.get('/ping', async (req, res) => {
  const [result] = await pool.query(`SELECT "hello world" as RESULT`)
  res.json(result[0])
})

app.get('/create', async (req, res) => {
  const result = await pool.query(`INSERT INTO users (name) VALUES ("Linda")`)
  res.json(result[0])
})

export default app
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const toolsRouter = require('./routes/tools')

const app = express()

const { PORT } = process.env

app.use(bodyParser.json())

app.use('/tools', toolsRouter)

module.exports = app
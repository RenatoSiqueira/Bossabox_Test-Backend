require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const toolsRouter = require('./routes/tools')

const app = express()

app.use(bodyParser.json())

app.use('/tools', toolsRouter)

module.exports = app
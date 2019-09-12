require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDoc = YAML.load('./swagger.yaml')

const toolsRouter = require('./routes/tools')

const app = express()

app.use(bodyParser.json())

app.use('/tools', toolsRouter)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

module.exports = app
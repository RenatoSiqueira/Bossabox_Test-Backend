require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDoc = YAML.load('./swagger.yaml')

const toolsRouter = require('./routes/tools')
const authRouter = require('./routes/auth')

const app = express()

app.use(bodyParser.json())

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use('/auth', authRouter)
app.use('/tools', toolsRouter)


module.exports = app
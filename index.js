require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const database = require('./database')

const toolsRouter = require('./routes/tools')

const app = express()

const { PORT } = process.env

app.use(bodyParser.json())

app.use('/tools', toolsRouter)

database
    .then(() => app.listen(PORT, () => console.log(`BossaBox Backend Server Running on port ${PORT}`)))
    .catch(err => console.log(err))
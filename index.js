require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const initialDatabase = require('./initialDatabase')
const toolsRouter = require('./routes/tools')

const app = express()

const { PORT, MONGOSERVER } = process.env
mongoose.Promise = global.Promise

app.use(bodyParser.json())

app.use('/tools', toolsRouter)

mongoose
    .connect(MONGOSERVER, { useNewUrlParser: true })
    .then(() => {
        initialDatabase()
        app.listen(PORT, () => console.log(`BossaBox Backend Server Running on port ${PORT}`))
    })
    .catch(err => console.log(err))
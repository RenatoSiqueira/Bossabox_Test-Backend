require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const toolsRouter = require('./routes/tools')

const app = express()

const { PORT, MONGOSERVER } = process.env
mongoose.Promise = global.Promise

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/tools', toolsRouter)

mongoose
    .connect(MONGOSERVER, { useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`BossaBox Backend Server Running on port ${PORT}`)))
    .catch(err => console.log(err))


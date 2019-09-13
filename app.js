require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const Routes = require('./routes')

const app = express()

app.use(bodyParser.json())
app.use(Routes)

module.exports = app
const express = require('express')
const router = express.Router()

const { permission } = require('../utils/auth')

router
    .use('/', permission('admin'))
    .get('/', (req, res) => res.status(200).json())

module.exports = router
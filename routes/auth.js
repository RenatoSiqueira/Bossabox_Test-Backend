const express = require('express')
const router = express.Router()

const { auth } = require('../utils/auth')

router.post('/', auth)

module.exports = router
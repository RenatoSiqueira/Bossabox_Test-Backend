const express = require('express')
const router = express.Router()

const toolsController = require('../controllers/tools')

router
    .get('/', toolsController.find)
    .post('/', toolsController.find)
    .delete('/:id', toolsController.remove)

module.exports = router
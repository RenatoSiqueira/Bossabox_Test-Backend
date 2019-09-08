const express = require('express')
const router = express.Router()

const toolsController = require('../controllers/tools')

router
    .get('/', toolsController.find)
    .post('/', toolsController.create)
    .patch('/:id', toolsController.patch)
    .delete('/:id', toolsController.remove)

module.exports = router
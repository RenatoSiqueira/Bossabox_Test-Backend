const express = require('express')
const router = express.Router()

const toolsController = require('../controllers/tools')
const { permission } = require('../utils/auth')

router
    .get('/', toolsController.find)
    .use('/', permission('restrito'))
    .post('/', toolsController.create)
    .patch('/:id', toolsController.update)
    .delete('/:id', toolsController.remove)

module.exports = router
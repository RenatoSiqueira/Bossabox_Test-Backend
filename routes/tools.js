const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWTSECRET

const toolsController = require('../controllers/tools')

router.get('/', toolsController.find)

router.use(async (req, res, next) => {
    const token = req.headers['x-access-token'] || req.body.token || req.query.token
    if (token) {
        try {
            jwt.verify(token, jwtSecret)
            next()
        } catch (err) {
            res.status(401).json(err)
        }
    } else
        res.status(401).json()
})

router
    .post('/', toolsController.create)
    .patch('/:id', toolsController.update)
    .delete('/:id', toolsController.remove)

module.exports = router
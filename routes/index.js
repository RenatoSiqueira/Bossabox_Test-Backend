const express = require('express')
const router = express.Router()

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDoc = YAML.load('./swagger.yaml')

const toolsRouter = require('./tools')
const authRouter = require('./auth')
const adminRouter = require('./admin')

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
router.use('/auth', authRouter)
router.use('/tools', toolsRouter)
router.use('/admin', adminRouter)

router.get('/', (req, res) => res.status(500).json({ success: false }))

module.exports = router
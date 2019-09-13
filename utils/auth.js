const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWTSECRET

const User = require('../models/user')

const generatePassHash = (password) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    return hash
}

const auth = async (req, res) => {
    const { username, password } = req.body
    const userDb = await User.findOne({ username })
    if (userDb) {
        if (!bcrypt.compareSync(password, userDb.password))
            res.status(401).json()
        else {
            const payload = {
                id: userDb._id,
                username: userDb.username,
                roles: userDb.roles
            }
            jwt.sign(payload, jwtSecret, (err, token) => {
                res.status(200).json({ token })
            })
        }
    } else
        res.status(401).json()
}

const permission = (role) => async (req, res, next) => {
    const token = req.headers['x-access-token'] || req.body.token || req.query.token
    if (token) {
        try {
            const payload = jwt.verify(token, jwtSecret)
            if (payload.roles.indexOf(role) >= 0)
                next()
            else
                res.status(401).json(err)
        } catch (err) {
            res.status(401).json(err)
        }
    } else
        res.status(401).json()
}

module.exports = {
    generatePassHash,
    auth,
    permission
}
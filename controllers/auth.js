const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWTSECRET

const User = require('../models/user')

const authController = async (req, res) => {
    const { username, password } = req.body
    const userDb = await User.findOne({ username })
    if (userDb) {
        if (userDb.password === password) {
            const payload = {
                id: userDb._id,
                username: userDb.username
            }
            jwt.sign(payload, jwtSecret, (err, token) => {
                res.status(200).json({ token })
            })
        }
        else
            res.status(401).json()
    } else
        res.status(401).json()
}


module.exports = authController
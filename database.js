const mongoose = require('mongoose')

const { MONGOSERVER } = process.env
mongoose.Promise = global.Promise

const initialDatabase = require('./initialDatabase')

const database = () => {
    return mongoose
        .connect(MONGOSERVER, { useNewUrlParser: true })
        .then(() => initialDatabase())
}

module.exports = database()
const app = require('./app')

const mongoose = require('mongoose')

const { MONGOSERVER, PORT } = process.env
mongoose.Promise = global.Promise

const { initialTools, initialUser } = require('./initialDatabase')

mongoose.connect(MONGOSERVER, { useNewUrlParser: true })
    .then(() => {
        initialUser()
        initialTools()
        app.listen(PORT, () => console.log(`BossaBox Backend Server Running on port ${PORT}`))
    })
    .catch(err => console.log(err))
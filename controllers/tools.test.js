require('dotenv').config()

const expect = require('chai').expect
const request = require('request')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const toolsController = require('../controllers/tools')
const initialDatabase = require('../initialDatabase')


const { PORT } = process.env
const mongo = 'mongodb://localhost/tools-test'
const server = `http://localhost:${PORT}/tools`

const bodyParse = (body) => {
    let _body = {}
    try {
        _body = JSON.parse(body)
    } catch (e) {
        _body = {}
    }
    return _body
}

describe('Tools Feature', () => {
    before('Connecting to mongodb', async (done) => {
        await mongoose.connect(mongo, { useNewUrlParser: true })
        await toolsController.remove({})
        await initialDatabase()
    })

    describe('Server Requests', () => {
        it('List All: Should be return all results when params not sended', done => {
            request.get(server, (err, response, body) => {
                const _body = bodyParse(body)
                expect(response.statusCode).to.equal(200)
                expect(_body).to.have.lengthOf.at.least(3)
                done()
            })
        })
        it('List One: Should be return one result when params sended', done => {
            request.get(`${server}?tag=node`, (err, response, body) => {
                const _body = bodyParse(body)
                expect(response.statusCode).to.equal(200)
                expect(_body).to.have.lengthOf.at.least(1)
                done()
            })
        })
        it('New Item: Should be return Status 501 when new item created', done => {
            const newItem = {
                title: "TEST",
                link: "TEST",
                description: "TEST",
                tags: ["test", "json", "schema", "node", "github", "rest"]
            }
            request.post({ url: server, json: true, body: newItem }, (err, response, body) => {
                expect(response.statusCode).to.equal(201)
                expect(body.title).to.equal('TEST')
                done()
            })
        })
        it('Remove Item: Should be return error when ID is invalid', done => {
            request.delete(`${server}/idInvalid`, (err, response, body) => {
                expect(response.statusCode).to.equal(500)
                done()
            })
        })
        it('Remove Item: Should be return Status 204 when remove some item', done => {
            request.delete(`${server}/id`, (err, response, body) => {
                //              const _body = bodyParse(body)
                expect(response.statusCode).to.equal(204)
                //                expect(_body).to.have.lengthOf.at.least(1)
                done()
            })
        })
    })
})
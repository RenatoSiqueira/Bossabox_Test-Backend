require('dotenv').config()

const expect = require('chai').expect
const request = require('request')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const ToolModel = require('../models/tool')
const initialDatabase = require('../initialDatabase')
const app = require('../app')

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

mongoose
    .connect(mongo, { useNewUrlParser: true })
    .then(app.listen(PORT, () => console.log('Connected on Test Database')))

describe('Tools Feature', () => {
    before('PRE: Rebuild Database', async () => {
        await ToolModel.deleteMany({})
        await initialDatabase()
        return true
    })

    describe('LIST METHODS', () => {
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
    })

    describe('REMOVE METHODS', () => {
        it('Remove Item: Should be return error when ID is invalid', done => {
            request.delete(`${server}/idInvalid`, (err, response, body) => {
                expect(response.statusCode).to.equal(500)
                done()
            })
        })

        let id
        before('To test Remove Item method, need a Valid ID', async () => {
            id = await ToolModel.findOne({})
            return true
        })

        it('Remove Item: Should be return Status 204 when remove some item', done => {
            request.delete(`${server}/${id._id}`, (err, response, body) => {
                expect(response.statusCode).to.equal(204)
                done()
            })
        })
    })

    describe('UPDATE METHODS', () => {
        before('To test Update Item method, need a Valid ID', async () => {
            id = await ToolModel.findOne({})
            return true
        })
        it('Update Item: Should be return Status 201 when data update', done => {
            const newItem = { "title": "TEST-UPDATE" }
            request.patch({ url: `${server}/${id._id}`, json: true, body: newItem }, (err, response, body) => {
                expect(response.statusCode).to.equal(201)
                done()
            })
        })
    })
})

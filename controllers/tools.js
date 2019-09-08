const Tool = require('../models/tool')

const find = async (req, res) => {
    const { tag } = req.query
    const param = {}

    if (!!tag)
        param = { tag }

    const tools = await Tool.find(param)
    res.json(tools)
}

const create = (req, res) => {
    const tool = new Tool(req.body)
    try {
        await tool.save()

        res
            .status(201)
            .send(tool)

    } catch (e) {
        res.send({
            success: false,
            errors: Object.keys(e.errors)
        })
    }
}

const remove = async (req, res) => {
    await Tool.remove({ id })
    res.status(204)
}

module.exports = {
    find,
    create,
    remove
}
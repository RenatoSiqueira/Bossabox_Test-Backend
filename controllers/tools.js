const Tool = require('../models/tool')

const find = async (req, res) => {
    const { tag } = req.query
    let param = {}

    if (!!tag)
        param = { tags: tag }

    const tools = await Tool.find(param)
    res.json(tools)
}

const create = async (req, res) => {
    const tool = new Tool(req.body)
    try {
        await tool.save()
        res.status(201).json(tool)
    } catch (e) {
        res.send({
            success: false,
            errors: Object.keys(e.errors)
        })
    }
}

const patch = async (req, res) => {
    const { id } = req.params
    const tool = await Tool.updateOne({ _id: id }, req.body)
    res.status(201).json(tool)
}

const remove = async (req, res) => {
    const { id } = req.params
    await Tool.deleteOne({ _id: id })
    res.status(204).json()
}

module.exports = {
    find,
    create,
    patch,
    remove
}
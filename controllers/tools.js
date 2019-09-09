const Tool = require('../models/tool')

const find = async (req, res) => {
    const { tag } = req.query
    let param = {}

    if (!!tag)
        param = { tags: tag }

    try {
        const tools = await Tool.find(param)
        res.status(200).json(tools)
    } catch (err) {
        res.status(500).json(err)
    }
}

const create = async (req, res) => {
    const tool = new Tool(req.body)
    try {
        await tool.save()
        res.status(201).json(tool)
    } catch (err) {
        res.status(500).json(err)
    }
}

const patch = async (req, res) => {
    const { id } = req.params
    try {
        const tool = await Tool.updateOne({ _id: id }, req.body)
        res.status(201).json(tool)
    } catch (err) {
        res.status(500).json(err)
    }
}

const remove = async (req, res) => {
    try {
        const { id } = req.params
        await Tool.deleteOne({ _id: id })
        res.status(204).json()
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    find,
    create,
    patch,
    remove
}
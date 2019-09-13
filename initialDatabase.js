const Tool = require('./models/tool')
const User = require('./models/user')
const { generatePassHash } = require('./utils/auth')

const { INITIALUSER, INITIALUSERPASS } = process.env

const initialTools = async () => {
    const results = await Tool.find({})
    if (results.length === 0) {
        Tool.insertMany([
            {
                title: "Notion",
                link: "https://notion.so",
                description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
                tags: ["organization", "planning", "collaboration", "writing", "calendar"]
            },
            {
                title: "json-server",
                link: "https://github.com/typicode/jsonserver",
                description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
                tags: ["api", "json", "schema", "node", "github", "rest"]
            },
            {
                title: "fastify",
                link: "https://www.fastify.io/",
                description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
                tags: ["web", "framework", "node", "http2", "https", "localhost"]
            }
        ])
    }
}

const initialUser = async () => {
    const results = await User.countDocuments({})
    if (results === 0) {
        const adminUser = new User({
            username: INITIALUSER,
            password: generatePassHash(INITIALUSERPASS),
            roles: ['restrito', 'admin']
        })
        await adminUser.save()

        const restritoUser = new User({
            username: 'restrito',
            password: generatePassHash('restrito'),
            roles: ['restrito']
        })
        await restritoUser.save()
    }
}

module.exports = {
    initialTools,
    initialUser
}
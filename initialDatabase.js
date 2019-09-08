const Tool = require('./models/tool')

const initialUser = async () => {
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

module.exports = initialUser
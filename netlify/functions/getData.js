exports.handler = async (event, context) => {
    const fs = require('fs')
    const data = JSON.parse(fs.readFileSync('data/questions.json', 'utf-8'))

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}
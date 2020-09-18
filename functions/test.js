const users = require('../data/users.json');
exports.handler = async() => {
    return {
        statusCode: 200,
        body: JSON.stringify(users)
    }
}
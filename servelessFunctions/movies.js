const movies = require('../data/movies.json');

// export an an handler
exports.handler = async() => {
    return{
        statusCode: 200,
        body: JSON.stringify(movies)
    }
}
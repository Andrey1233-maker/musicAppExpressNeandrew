const Author = require('../models/author.model')

function getMusicCountByAuthorId(id){
    const count = await Author.count({id: id})
    return count
}

module.exports = {getMusicCountByAuthorId}
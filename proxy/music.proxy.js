const Author = require('../models/author.model')

async function getMusicCountByAuthorId(id){
    const count = await Author.count({id: id})
    return count
}

module.exports = {getMusicCountByAuthorId}
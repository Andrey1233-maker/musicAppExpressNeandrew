const Author = require('../models/author.model') 

async function getAuthorNameById(id){
    try{
        const author = await Author.findById(id)
        return author.name
    }
    catch(e){
        console.error(e )
        throw e
    }
}

module.exports = { getAuthorNameById }
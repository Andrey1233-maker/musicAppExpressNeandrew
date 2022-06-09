const Author = require('../models/author.model')
const Music = require('../models/music.model')

async function getMusicCountByAuthorId(id){
    const musicList = await Music.find({author: id})
    const count = musicList.length
    return count
}

module.exports = {getMusicCountByAuthorId}
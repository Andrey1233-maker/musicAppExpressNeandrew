const { google } = require('googleapis')
const File = require('../models/file.model') 
const { createPublicUri } = require('./system.proxy')

async function getLinkById(id){
    const file = await File.findById(id)
    const link = await createPublicUri(file)
    return link
}

module.exports = { getLinkById }
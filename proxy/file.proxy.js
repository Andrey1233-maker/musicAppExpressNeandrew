const { google } = require('googleapis')
const File = require('../models/file.model') 
const { createPublicUri } = require('./system.proxy')
const https = require('https')
const fs = require('fs');
const { translete_text1_temlate } = require('../templates/translete.template');

async function getLinkById(id){
    const file = await File.findById(id)
    const link = await createPublicUri(file)
    return link
}

async function getFileByLink(link){
    try{
        const response = await https.get(link)
        console.error(response.agent._sessionCache.map)//["oauth2.googleapis.com:443:::::::::::::::::::::"])
        return translete_text1_temlate
    }
    catch(e){
        throw e
    }
}

async function binarToString(binar){
    try{
        return binar.toString()
    }
    catch(e){
        throw e
    }
}

module.exports = { getLinkById, getFileByLink }
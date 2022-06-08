const { google } = require("googleapis")
const fs = require('fs')


function getAuthGoogleToken(){
    const oauth2Client = new google.auth.OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        process.env.REDIRECT_URI
    )

    oauth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN})

    return oauth2Client
}

function getGoogleApi(){
    const drive = google.drive({
        version: 'v3',
        auth: getAuthGoogleToken(),
    })
    return drive
}

async function uploadFile(file, fileName, type){
    try{
        const driveApi = getGoogleApi()
        const response = await driveApi.files.create({
            requestBody: {
                name: fileName,
                mimeType: type,
            },
            media: {
                mimeType: type,
                body: fs.createReadStream(file) 
            }
        })

        console.log(response.data)
    }
    catch(e){
        console.log(e.message)
        throw e
    }
}

async function createPublicUri(file){
    try{
        const fileId = file.id_in_drive
        const drive = getGoogleApi()
        const response = await drive.permessions.create({
            fileId,
            requestBody: {
                role: 'reader',
                type: 'anyone',
            }
        })

        const result = await drive.files.get({
            fileId,
            fields: 'webContentLink',
        })

        console.log(result.data)
        return result.data
    }
    catch(e){
        console.log(e.message)
        throw e
    }
}

async function getFileListFromDrive(){
    try{
        const drive = getGoogleApi()
        const listParams = {};
        const response = await drive.permissions.create({
            fileId: "1jgQQ6crBajAC8nrueNt5gWRYy7nPM-VX",
            requestBody: {
                role: 'reader',
                type: 'anyone',
            }
        })
        const result = await drive.files.get({
            fileId: "1jgQQ6crBajAC8nrueNt5gWRYy7nPM-VX",
            fields: 'webContentLink'
        })
        return result.data
    }
    catch(e){
        console.log(e)
        throw e
    }
}


module.exports = { getAuthGoogleToken, createPublicUri, getFileListFromDrive } 
const File = require('../models/file.model'); 
const {Router} = require('express');
const {getFileListFromDrive} = require('../proxy/system.proxy')

const router = Router()

router.get('/file/:id', async (req, res) => {
    try{
        const id = req.params.id

        const file = await File.findById(id)

        const fileContentLink = await getPublicUri(file)

        res.status(200).json({link: fileContentLink})
    }
    catch(e){
        res.status(500).json({message: e})
    }
})

router.get('/dev/fileList', async (req, res) => {
    try{
        const list = await getFileListFromDrive()
        res.status(200).json({list})
    }
    catch(e){
        res.status(500).json({message: e})
    }
})

router.get('/', async(req, res) => {
    try{
        const result = await File.find()
        res.status(200).json({result})
    }
    catch(e){
        res.status(500).json({message: e})
    }
})

module.exports = router
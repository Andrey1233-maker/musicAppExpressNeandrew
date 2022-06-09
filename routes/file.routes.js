const File = require('../models/file.model'); 
const Music = require('../models/music.model'); 
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
// // 1PA2AbPz_Unq5yK3NM6kwddHpDYOsswoe
// router.get('/dev', async (req, res) =>{
//     const file = await File.findOne({id_in_drive: '1PA2AbPz_Unq5yK3NM6kwddHpDYOsswoe'})
//     const music = await Music.findOne()
//     await Music.updateOne({_id: music._id}, {translete: file._id})
// })

module.exports = router
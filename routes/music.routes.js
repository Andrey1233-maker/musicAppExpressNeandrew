const Music = require('../models/music.model'); 
const File = require('../models/file.model'); 
const jwt = require('jsonwebtoken');
const {Router} = require('express');
const { getLinkById } = require('../proxy/file.proxy');
const { getSummOfGradeById } = require('../proxy/grade.proxy');

const router = Router();

router.get('/list', async(req, res) => {
    try{
        if(!req.author){
            const musicList = await Music.find()
            let musicArray = []
            for(let i = 0; i < musicList.length; i++){
                const e = musicList[i]
                musicArray.push({name: e.name, _id: e._id, file: e.file, imgPath: await getLinkById(e.image), author: e.author, kind: e.kind})
            }
            res.status(200).json({musicList: musicArray})
        }
        else{
            
        }
    }
    catch(e){
        res.status(500).json({message: e})
    }
})

router.post('/create', async(req, res) => {
    try{
        console.log(req.body)
        const author = req.body.author || null
        const file = req.body.file || null
        const image = req.body.image || null

        const newMusic = new Music({name: req.body.name, kind: req.body.kind, author, file, image})
        await newMusic.save()
        res.status(200).json({newMusic})
    }
    catch(e){
        res.status(500).json({message: e})
    }
})

router.get('/list/popular', async(req, res) => {
    try{
        if(!req.author){
            const musicList = await Music.find()
            let musicArray = []
            for(let i = 0; i < musicList.length; i++){
                const e = musicList[i]
                musicArray.push({name: e.name, _id: e._id, file: e.file, imgPath: await getLinkById(e.image), author: e.author, kind: e.kind, grade: await getSummOfGradeById(e._id)})
            }
            const sortedMusicList = musicArray.sort((a, b) => {
                return a.grade > b.grade
            })
            res.status(200).json({popularList: sortedMusicList})
        }
        else{
            
        }
    }
    catch(e){
        res.status(500).json({message: e})
    }
})

module.exports = router;
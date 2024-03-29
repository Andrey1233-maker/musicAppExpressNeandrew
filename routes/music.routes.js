const Music = require('../models/music.model'); 
const {Router} = require('express');
const { getLinkById } = require('../proxy/file.proxy');
const { getSummOfGradeById, thisUserLiked } = require('../proxy/grade.proxy');
const { verifyToken } = require('../proxy/auth.proxy');
const { getAuthorNameById } = require('../proxy/author.proxy');


const router = Router();

router.get('/list', verifyToken, async(req, res) => {
    try{
        const musicList = await Music.find()
        let musicArray = []
        for(let i = 0; i < musicList.length; i++){
            const e = musicList[i]
            musicArray.push({name: e.name, _id: e._id, file: e.file, imgPath: await getLinkById(e.image), author: e.author &&  await getAuthorNameById(e.author), kind: e.kind, liked: await thisUserLiked(req.user.userId, e._id), translate: e.translate})
        }
        res.status(200).json({musicList: musicArray})

    }
    catch(e){
        res.status(500).json({message: e})
    }
})

router.post('/create', verifyToken, async(req, res) => {
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

router.get('/list/popular', verifyToken , async(req, res) => {
    try{
        const musicList = await Music.find()
        let musicArray = []
        for(let i = 0; i < musicList.length; i++){
            const e = musicList[i]
            musicArray.push({name: e.name, _id: e._id, file: e.file, imgPath: await getLinkById(e.image), author: e.author && await getAuthorNameById(e.author), kind: e.kind, grade: await getSummOfGradeById(e._id),  liked: await thisUserLiked(req.user.userId, e._id), translate: e.translate})
        }
        const sortedMusicList = musicArray.sort((a, b) => {
            return a.grade > b.grade
        })
        res.status(200).json({popularList: sortedMusicList})
}
    catch(e){
        res.status(500).json({message: e})
    }
})

router.post('/file', verifyToken, async(req, res) => {
    try{
        const fileId = req.body.id
        const fileLink = await getLinkById(fileId)
        res.status(200).send(fileLink)
    }
    catch(e){
        res.status(500).json({message: e})
    }
})

router.post('/list/author', verifyToken, async(req, res) => {
    try{
        const authorId = req.body.id
        const musicList = await Music.find({author: authorId})
        let musicArray = []
        for(let i = 0; i < musicList.length; i++){
            const e = musicList[i]
            musicArray.push({name: e.name, _id: e._id, file: e.file, imgPath: await getLinkById(e.image), author: e.author && await getAuthorNameById(e.author), kind: e.kind, grade: await getSummOfGradeById(e._id),  liked: await thisUserLiked(req.user.userId, e._id), translate: e.translate})
        }
        const sortedMusicList = musicArray.sort((a, b) => {
            return a.grade > b.grade
        })
        res.status(200).json({musicList: sortedMusicList})
    }
    catch(e){
        console.error(e)
        res.status(500).json({message: e})
    }
})

module.exports = router;``
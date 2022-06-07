const Music = require('../models/music.model'); 
const jwt = require('jsonwebtoken');
const {Router} = require('express');

const router = Router();

router.get('/list', async(req, res) => {
    try{
        if(!req.author){
            const musicList = await Music.find()
            res.status(200).json({musicList})
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

module.exports = router;
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
    }
    catch(e){
        res.status(500).json({message: e})
    }
})

module.exports = router;
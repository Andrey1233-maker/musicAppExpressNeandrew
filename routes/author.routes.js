const Author = require('../models/author.model') 
const {Router} = require('express')
const { checkToken } = require('../authGuard');
const { getMusicCountByAuthorId } = require('../proxy/music.proxy');

const router = Router();

router.post('/test', async(req, res) => {
    try{
        if(checkToken(req.header.Authorization.split(' ')[1])){
            res.status(200).json({message: req.header.Authorization.split(' ')[1]})
        }
        else{
            res.status(500).json({message: "SAST"})
        }
    }
    catch(e){
        res.status(500).json({message: e})
    }
})

router.get('/list', async(req, res) => {
    try{
        const authorList = await Author.find()
        res.status(200).json({authorList})
    }
    catch(e){
        res.status(500).json({message: e})
    }

})

router.post('/create', async(req, res) => {
    try{
        const name = req.body.name
        const newAuthor = new Author({name})
        await newAuthor.save()
        res.status(200).json({newAuthor})
    }
    catch(e){
        res.status(500).json({message: e})
    }
})


module.exports = router
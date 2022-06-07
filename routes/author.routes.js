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
        if(!req.filter){
            const authorList = await Author.find()
            const moreAuthor = authorList.map( e => {
                return {...e, count: getMusicCountByAuthorId(e.id)}
            })
            res.status(200).json({authorList: moreAuthor})
        }
        else{
            const authorList = await Author.find({name: filter})
            const moreAuthor = authorList.map( e => {
                return {...e, count: getMusicCountByAuthorId(e.id)}
            })
            res.status(200).json({authorList: moreAuthor})
        }
    }
    catch(e){
        res.status(500).json({message: e})
    }

})


module.exports = router
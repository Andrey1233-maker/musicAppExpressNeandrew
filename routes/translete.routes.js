
const Translete = require('../models/user.model'); 
const {Router} = require('express');
const { verifyToken } = require('../proxy/auth.proxy');
const { getLinkById, getFileByLink } = require('../proxy/file.proxy');

const router = Router()

router.post('/', verifyToken, async(req, res) => {
    try{
        const fileId = req.body.id
        const fileLink = await getLinkById(fileId)

        const file = await getFileByLink(fileLink)
        res.status(200).send(file)
    }
    catch(e){
        console.error(e)
        res.status(500).json({message: e})
    }
})

module.exports = router
const User = require('../models/user.model'); 
const jwt = require('jsonwebtoken');
const {Router} = require('express');

const router = Router();

router.post('/test', async(req, res) => {
    try{
        if(req.user){
            res.status(200).json({message: req.user})
        }
        else{
            throw new Error("SASAT")
        }
    }
    catch(e){
        res.status(500).json({message: e})
    }
})
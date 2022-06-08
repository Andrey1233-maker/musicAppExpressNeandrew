const {Router} = require('express');
const { verifyToken } = require('../proxy/auth.proxy');

const router = Routrer()

router.post('/like', verifyToken, async(res, req) => {
    
})
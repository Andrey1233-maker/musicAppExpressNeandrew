const {Router} = require('express');
const { checkToken } = require('../authGuard');

const router = Router();

router.post('/test', authenticateToken, async(req, res) => {
    try{
        if(checkToken(authenticateToken)){
            res.status(200).json({message: checkToken(authenticateToken)})
        }
        else{
            res.status(500).json({message: "SAST"})
        }
    }
    catch(e){
        res.status(500).json({message: e})
    }
})

module.exports = router
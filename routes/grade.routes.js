const {Router} = require('express');
const { verifyToken } = require('../proxy/auth.proxy');
const Grade = require('../models/grade.model')

const router = Router()

router.post('/like', verifyToken, async(req, res) => {
    try{
        const grade = await Grade.findOne({user: req.user.userId, music: req.body.id})
        if(grade){
            await Grade.deleteOne({_id: grade._id})
            res.status(200).json({message: 'OKE-DOK2'})
        }
        else{
            const newGrade = new Grade({user: req.user.userId, music: req.body.id})
            await newGrade.save()
            res.status(200).json({message: 'OKE-DOK1'})
        }
    }
    catch(e){
        res.status(500).json({message: e})
    }
})

router.get('/', async(req, res) => {
    try{
        const gradeList = await Grade.find()
        res.status(200).json({gradeList})
    }
    catch(e){
        res.status(500).json({message: e})
    }
})

module.exports = router
const Grade = require('../models/grade.model')

async function getSummOfGradeById(id){
    try{
        const gradeArray = await Grade.find({music: id})
        return gradeArray.length
    }
    catch(e){
        throw e
    }
}

async function thisUserLiked(id, musicId){
    try{
        const result = await Grade.findOne({user: id, music: musicId})
        return (result) ? true : false
    }
    catch(e){
        throw e
    }
}

module.exports = { getSummOfGradeById, thisUserLiked }
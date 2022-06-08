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

module.exports = { getSummOfGradeById }
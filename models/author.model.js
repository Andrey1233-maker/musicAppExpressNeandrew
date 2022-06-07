
  
const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    id: { type: Types.ObjectId },
    name: { type: string, required: true },
})

module.exports = model('Author', schema)
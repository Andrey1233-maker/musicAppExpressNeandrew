
  
const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    id: { type: Types.ObjectId },
    name: { type: String, required: true },
})

module.exports = model('Author', schema)

  
const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    id: { type: Types.ObjectId },
    name: { type: String, required: true },
    img: {type: Types.ObjectId, ref: 'File'}
})

module.exports = model('Author', schema)
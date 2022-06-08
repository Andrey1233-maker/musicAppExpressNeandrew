
  
const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    id: { type: Types.ObjectId },
    name: { type: String, required: true },
    file: { type: Types.ObjectId, ref: 'File' },
    image: { type: Types.ObjectId, ref: 'File'},
    author: { type: Types.ObjectId, ref: 'Author' },
    kind: { type: String, required: true },
})

module.exports = model('Music', schema)
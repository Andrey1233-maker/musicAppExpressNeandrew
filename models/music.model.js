
  
const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    id: { type: Types.ObjectId },
    name: { type: string, required: true },
    file: { type: Types.ObjectId, ref: 'File' },
    image: { type: Types.ObjectId, ref: 'Image'},
    author: { type: Types.ObjectId, ref: 'Author' },
    kind: { type: string, required: true },
})

module.exports = model('Music', schema)
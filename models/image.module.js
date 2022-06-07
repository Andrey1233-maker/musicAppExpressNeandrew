
  
const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    id: { type: Types.ObjectId },
    file: { type: Types.ObjectId, ref: 'File'},
});

module.exports = model('Image', schema);
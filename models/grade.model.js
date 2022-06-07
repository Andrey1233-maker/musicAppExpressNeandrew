
  
const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    id: { type: Types.ObjectId },
    user: { type: Types.ObjectId, ref: 'User' },
    file: { type: Types.ObjectId, ref: 'File' },
    grade: { type: Number, required: true },
});

module.exports = model('Grade', schema);
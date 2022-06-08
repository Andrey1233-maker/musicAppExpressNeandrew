
  
const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    id: { type: Types.ObjectId },
    user: { type: Types.ObjectId, ref: 'User' },
    music: { type: Types.ObjectId, ref: 'Music' },
});

module.exports = model('Grade', schema);
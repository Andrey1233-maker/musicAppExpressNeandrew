
  
const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    id: {type: Types.ObjectId},
    id_in_drive: {type: String, required: true, unique: true}
});

module.exports = model('File', schema);
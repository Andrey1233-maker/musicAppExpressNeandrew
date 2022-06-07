
  
const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    id: {type: Types.ObjectId},
    path: {type: String, require: true, unique: true},
    name: {type: String, require: true, unique: true},
});

module.exports = model('File', schema);
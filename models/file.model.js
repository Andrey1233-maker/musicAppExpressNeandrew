
  
const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    id: {type: Types.ObjectId},
    path: {type: string, require: true, unique: true},
    name: {type: string, require: true, unique: true},
});

module.exports = model('File', schema);
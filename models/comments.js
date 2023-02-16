const mongoose = require('mongoose');

// ************ CREATE SCHEMA ************ //
const Schema = mongoose.Schema;
const commentSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  snippet:{
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
})

// ************ CREATE MODEL ************ //
const comment = mongoose.model('comment',commentSchema);

// ************ EXPORT MODEL ************ //
module.exports = comment;
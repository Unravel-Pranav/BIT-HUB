const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  uploadedfilename:{type: String},
  description:{type: String},
  authorName :{type: String},
  branch : {type: String},
  semester:{type: String},
  subject: {type: String},
  status:{type:String,default:'pending'},
  filename: {type: String , unique:true},
  path: {type: String},
  resourceType : {type :String}
});

module.exports  = mongoose.model('File', fileSchema);

const mongoose = require('mongoose');

const SubjectModal = new mongoose.Schema({
    subname: { type: String, default: null },
    subbranch:{type: String},
    subsemester: { type: String },
})

module.exports = mongoose.model("subject", SubjectModal)
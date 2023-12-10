//step7
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: true
  },

  gender: {
    type: String,
    required: true
  },

})

const Student = mongoose.model("StudentDoc", studentSchema);

module.exports = Student;




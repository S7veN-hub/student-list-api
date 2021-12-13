const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Noir:Xenon777@cluster0.cpdfo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const schemaStudents = new mongoose.Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    fp: {type: String, required: true},
    average_grade: {type: Number, required: true},
    scholarship: {type: String, required: true}
});

module.exports = mongoose.model('student', schemaStudents);
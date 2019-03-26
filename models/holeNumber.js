const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let HoleNumber = new Schema({
    holeNumber: {
        type: Number
    },
    phoneNumber: {
        type: Number
    },
})

module.exports = mongoose.model('HoleNumber', HoleNumber)
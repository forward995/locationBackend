const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let Location = new Schema({
    phoneNumber: {
        type: Number
    },
    latitude : {
        type: Number
    },
    longitude : {
        type: Number
    }
})

module.exports = mongoose.model('Location', Location)
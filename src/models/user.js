// Домашка 4
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
        minLengh: 2
    },
     surname:{
        type: String,
        required: true,
        minLengh: 2,
     },   
    username: {
        type: String,
        required: true,
        minLengh: 2,
    },

});

module.exports = mongoose.model('user', userSchema);
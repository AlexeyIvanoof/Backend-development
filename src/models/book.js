// Домашка 4
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    author:{
        type: String,
        required: true,
        minLengh: 2
    },
    title:{
        type: String,
        required: true,
        minLengh: 2,
     },   
     year: {
        type: Number,
        required: true,
        minLengh: 2,
    },

});

module.exports = mongoose.model('book', bookSchema);
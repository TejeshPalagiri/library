const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    book_title:{
        type: String,
        required: true
    },
    book_description:{
        type: String,
        required: true
    }
});


const Book = module.exports = mongoose.model('Book', bookSchema);
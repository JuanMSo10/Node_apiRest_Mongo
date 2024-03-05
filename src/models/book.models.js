const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title: String,
        author: String,
        genere: String,
        publication_date: String,
    }
)


module.exports = mongoose.model('Book', bookSchema)
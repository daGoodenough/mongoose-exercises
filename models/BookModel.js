const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {type: String, required: true},
  author: String,
  pages:Number,
  genres:[String],
  rating:Number,
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book;
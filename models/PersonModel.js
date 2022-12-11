const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const { Schema } = mongoose;

const personSchema = new Schema({
  hair: String,
  eyes: String,
  height: Number,
  weight: Number,
  salary: Number,
  numKids: Number,
  kids: []
})

const Person = mongoose.model("Person", personSchema)

module.exports = Person;
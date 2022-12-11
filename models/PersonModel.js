const mongoose = require('mongoose')

const { Schema } = mongoose;

const personSchema = new Schema({
  hair: String,
  eyes: String,
  height: Number,
  weight: Number,
  salary: Number,
  numKids: Number,
  kids: [String]
})

const Person = mongoose.model("Person", personSchema)

module.exports = Person;
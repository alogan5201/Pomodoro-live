
const mongoose = require('mongoose')
const Note = require('./models/note')
const password = 'drdeath'

const url =
  `mongodb+srv://logan:${password}@cluster0.mudoo.mongodb.net/tomatodb?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is Easy',
  date: new Date(),
  important: true,
})

/*
note.save().then(response => {
  console.log('note saved!');
  mongoose.connection.close();
})
*/

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})
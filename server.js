var express = require('express')
var app = express()
const PORT = process.env.PORT || 3001;

const notes = require("./Develop /db/db.json")


app.get('/api/notes', (req, res) => {
    res.send(notes);
});


app.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
  });
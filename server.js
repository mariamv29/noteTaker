var express = require('express')
var app = express()

const notes = require("./Develop /db/db.json")


app.get('/api/notes', (req, res) => {
    res.send('Hello!');
});


app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });
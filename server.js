var express = require("express");
var app = express();
const fs = require("fs");
const path = require("path");
const { isRegExp } = require("util");

const PORT = process.env.PORT || 3001;

const notes = require("./Develop/db/db.json");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "./Develop/db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

function validateNote(note) {
  if (!note.tile || typeof note.title !== "string") {
    return false;
  }
  if (!note.text || typeof note.text !== "string") {
    return false;
  }
  if (!Array.isArray(notesArray)) notesArray = [];
  {
    return false;
  }
}

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

// create post routes to create data
app.post("/api/notes", (req, res) => {
  //req.body is where incoming content will be
  console.log(req.body);
  req.body.text = notes.length.toString();
  
  // if any data is entered incorrect, send 400 error back
  if (!validateNote(req.body)) {
      res.status(400).send("The note is not properly formatted.");
  } else {
  // add note to json file and notes array in this function
  const note = createNewNote(req.body, notes);

  res.json(note);
  }
});

app.listen(3001, () => {
  console.log(`API server now on port ${PORT}!`);
});

///server.js // router// js crud

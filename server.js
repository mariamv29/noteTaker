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

app.use(express.static("public"));

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "./Develop/db/db.json"),
    JSON.stringify(notesArray, null, 2)
  );
  return note;
}

function validateNote(note) {
  if (note.title === "") {
    console.log(note);
    console.log(note.title);
    return false;
  }
  if (note.text === "") {
    console.log(note.text);
    return false;
  }
  return true;
}

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

// create post routes to create data
app.post("/api/notes", (req, res) => {
  //req.body is where incoming content will be
  console.log(req.body);
  req.body.id = notes.length.toString();
  console.log(req.body.text);
  // if any data is entered incorrect, send 400 error back
  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const note = createNewNote(req.body, notes);

    res.json(note);
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});

app.listen(3001, () => {
  console.log(`API server now on port ${PORT}!`);
});

///server.js // router// js crud

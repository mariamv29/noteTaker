const fs = require("fs");
const path = require("path");


function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
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
  
  
  module.exports = {createNewNote, validateNote};
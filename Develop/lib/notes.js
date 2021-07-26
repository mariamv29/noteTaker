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
  
  function deleteNotes(id, notesArray) {
    for(let  i = 0; i < notesArray.length; i++) {
      const note = notesArray [i];

      if (note.id == id) {
        notesArray.splice(i, 1);
        fs.writeFileSync(
          path.join(__dirname, "../db/db.json"),
          JSON.stringify(notesArray, null, 2)
        );
        break;
      }
    }
  }
  
  module.exports = {createNewNote, validateNote, deleteNotes};
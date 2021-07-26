const router = require("express").Router();
const {
  createNewNote,
  validateNote,
  deleteNotes,
} = require("../../Develop/lib/notes");
const notes = require("../../Develop/db/db.json");

router.get("/notes", (req, res) => {
  res.send(notes);
});

// create post routes to create data
router.post("/notes", (req, res) => {
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


// create post routes to delete data
router.delete("/notes/:id", (req, res) => {

  deleteNotes(req.params.id, notes);
  res.json(true);
});

module.exports = router;

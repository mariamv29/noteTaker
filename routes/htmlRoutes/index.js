
const path = require('path');
const router = require('express').Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../../main/public/index.html'));
  });
  
  router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../main/public/notes.html"));
  });

  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../main/public/notes.html"));
  });
  
module.exports = router; 


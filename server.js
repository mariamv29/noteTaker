const htmlRoutes = require("./routes/htmlRoutes/index");
const apiRoutes = require("./routes/apiRoutes/notesRoutes");

// const apiRoutes = require('./routes/apiRoutes');
const express = require("express");
const PORT = process.env.PORT || 3001;
const fs = require("fs");
const path = require("path");
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const notes = require("./main/db/db.json");

// Sets up the Express app to handle data parsing

app.use(express.static("main/public"));

// app.use('/api', apiRoutes);
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

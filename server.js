// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Data Arrays
var tables = [];
var waitList = [];


// Routes
// =============================================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/waitList", function(req, res) {
  res.json(waitList);
});

// Tables
app.get("/api/tables", function(req, res) {
  res.json(tables);
});

app.post("/api/tables", function(req, res){ 
  var newReservation = req.body;
  if (tables.length < 3){
     tables.push(newReservation)
  } else{
    waitList.push(newReservation)
  }
  res.json(newReservation);
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

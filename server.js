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
var tables = [{
    customerName: 'Jimbo',
    phoneNumber: '510-555-5555',
    customerEmail: 'sdljf@sdlkfj.com',
    customerID: '12345'
}];
var waitList = [];


// Routes
// =============================================================

// app.get("/", function(req, res) {
//   res.send("Welcome to the Hot Restaurant Page!");
// });

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
  res.json(tables);
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/waitList", function(req, res) {
  res.json(waitList);
});

// Get all 
app.get("/all", function(req, res) {
  res.json(newReservation);
});

app.post("/api/tables", function(req, res){
  var newReservation = req.body;
  newReservation.routeName = newReservation.customerName.replace(/\s+/g, "").toLowerCase();


  res.json(newReservation);
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

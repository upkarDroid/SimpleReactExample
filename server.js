var fs = require("fs");
var express = require("express");

var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function(req, res) {
  fs.readFile("mock.json", function(err, data) {
    data = JSON.parse(data);
    res.json(data);
  });
});

app.listen(8080);

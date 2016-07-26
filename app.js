var express = require("express");
var app = express();
var path = require("path");

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/LookBook.html"));
});
app.use(express.static(__dirname + "/images"));
app.use(express.static(__dirname + "styles.css"))



var server = app.listen(3000, function() {
    console.log("listening at http://localhost:3000")
});
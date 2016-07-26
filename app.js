var express = require("express");
var app = express();
var path = require("path");

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.use(express.static(__dirname + "/public"));

//app.use(express.static(__dirname + "styles.css"))



var server = app.listen(3000, function() {
    console.log("listening at http://localhost:3000")
});
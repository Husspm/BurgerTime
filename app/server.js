var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname)));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
var exphbs = require("express-handlebars");

var testWords = [
    { name: "Person One", occ: "Designer" },
    { name: "Person Two", occ: "Backend Devoloper" },
    { name: "Person Three", occ: "Project Manager" }
];

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.get("/", function(req, res) {
    res.render("index", { options: testWords });
});
var express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path"),
    app = express(),
    method = require("method-override"),
    PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname)));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
var exphbs = require("express-handlebars");

var items = [];

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/", function(req, response) {
    response.render("index");
});
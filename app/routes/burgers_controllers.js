var database = require("../models");
console.log(database);
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/api/burgers", function(req, res) {
        database.burger.findAll({}).then(function(databaseAll) {
            res.json(databaseAll);
        });
    });


    // POST route for saving a new post
    app.post("/api/burgers", function(req, res) {
        database.burger.create({
            burger_name: req.body.name
        }).then(function(databasePost) {
            res.json(databasePost);
        });
    });
};
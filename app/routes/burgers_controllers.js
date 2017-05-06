var database = require("../models");
console.log("PHASE 3");
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/", function(req, res) {
        database.Burger.findAll({}).then(function(databaseAll) {
            console.log(databaseAll);
            res.render("index", { burgers: databaseAll });
        });
    });

    app.post("/", function(req, res) {
        database.Burger.create({
            burger_name: req.body.name
        }).then(function() {
            database.Burger.findAll({}).then(function(databasePosts) {
                res.render("index", { burgers: databasePosts });
            });
        });
    });
};
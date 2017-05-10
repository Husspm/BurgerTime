var database = require("../models");
console.log("CONTROLLERS pass");
module.exports = function(app) {

    app.get("/", function(req, res) {
        database.Burger.findAll({ include: database.Chef }).then(function(data) {
            res.render("index", { burgers: data });
        });
    });

    app.post("/", function(req, res) {
        database.Burger.create({
            burger_name: req.body.name,
            ChefId: req.body.chefId
        }).then(function() {
            database.Burger.findAll({ include: [database.Chef] }).then(function(data) {
                res.render("index", { burgers: data });
            });
        });
    });
    app.put("/", function(req, res) {
        database.Burger.update({
            devoured: req.body.devoured
        }, {
            where: {
                id: req.body.id,
            }
        }).then(function() {
            database.Burger.findAll({}).then(function(data) {
                res.redirect("/");
            });
        });
    });
    app.get("/chefs", function(req, res) {
        res.render("chefs");
    });
    app.post("/chefs", function(req, res) {
        database.Chef.create({
            chef_name: req.body.chef
        }).then(function(newChef) {
            res.render("index", { chefs: newChef });
        });
    });
    app.get("/chefs/:id", function(req, res) {
        database.Burger.findAll({
            include: [database.Chef],
            where: {
                ChefId: req.params.id
            }
        }).then(function(data) {
            res.render("index", { burgers: data });
        });
    });
}; //ends exports function
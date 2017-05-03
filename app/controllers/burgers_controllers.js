var express = require("express"),
    router = express.Router(),
    burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        for (var index = 0; index < data.length; index++) {
            if (data[index].devoured === 0) {
                data[index].devoured = "You haven't eaten this one yet";
            } else {
                data[index].devoured = "You ate it already, what did you think";
            }
        }
        var renderObject = {
            burgers: data
        };
        res.render("index", renderObject);
    });
});
router.post("/", function(req, res) {
    burger.new([
        "burger_name"
    ], [
        req.body.name
    ], function() {
        res.redirect("/");
    });
});
router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.eaten({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});

module.exports = router;
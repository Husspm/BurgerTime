var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    new: function(cols, vals, cb) {
        orm.makeNew("burgers", cols, vals, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;
db = require("./connection.js");

//ripped straight from the cats example from the day I missed :(

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

var orm = {
    selectAll: function(tableName, cb) {
        var queryURL = "SELECT * FROM " + tableName + ";";
        db.query(queryURL, function(err, results) {
            if (err) throw err;
            cb(results);
        });
    },
    //also ripped from the cats example, but I have done something similar in REPO called->
    //https://github.com/Husspm/firebasePaint for getting rgba values formatted correctly to affect the css and html canvas 
    makeNew: function(tableName, cols, vals, cb) {
        var queryString = "INSERT INTO " + tableName;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};
module.exports = orm;
//resusing DataBaseAccess so I know what it means
DBA = require("./connection.js");

//ripped straight from the cats example from the day I missed :(
//although all my other info is auto generated so kinda don't need it
//but still good to have and see as an example of how to keep formatting modular ;) <3
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
// also ripped straight from cats example.........
//again probably don't need since it i really one value to change
function objToUpdate(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }

    return arr.toString();
}

var orm = {
    selectAll: function(tableName, cb) {
        var queryURL = "SELECT * FROM " + tableName + ";";
        DBA.query(queryURL, function(err, results) {
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
        DBA.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function(tableName, objColVals, condition, cb) {
        var queryString = "UPDATE " + tableName;

        queryString += " SET ";
        queryString += objToUpdate(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        DBA.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;
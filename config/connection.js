//DBA = DataBaseAccess
var DBA = require("mysql"),
    connection;
if (process.env.JAWSDB_URL) {
    connection = DBA.createConnection(process.env.JAWSDB_URL);
} else {
    connection = DBA.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "qaz123wsx456",
        database: "burgers_db"
    });
}
connection.connect(function(err) {
    if (err) throw err;
    //again for conformation
    console.log("Welcome you are connected as id + " + connection.threadId);
});
module.exports = connection;
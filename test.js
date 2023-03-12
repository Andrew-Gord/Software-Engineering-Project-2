const mysql = require('mysql');
const con = mysql.createConnection({
    host:"aws-project02.cyahxioux9bs.us-east-2.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "cheesecake123"
})
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.end();
});
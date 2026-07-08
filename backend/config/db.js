const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nitt@1234",
    database: "smart_panchayat",
});

connection.connect((err) => {
    if (err) {
        console.log("Database Error");
        return;
    }

    console.log("MySQL Connected Successfully");
});

module.exports = connection;
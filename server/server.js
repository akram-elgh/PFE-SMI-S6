const express = require("express");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "PFE",
});

connection.connect((err) => console.log(err || "Database connected"));

app.get("/", (err, res) => {
  res.send("Hello, world!");
});

app.listen(3001, (err) => console.log(err || "Server Started"));

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "PFE",
});

connection.connect((err) => console.log(err || "Database connected"));

app.get("/", (err, res) => {
  res.send("Hello, world!");
});

app.route("/class").get((req, res) => {
  console.log(req.query.id);
  const id = req.query.id;
  const query = id ? "WHERE class_id = " + id : "";
  connection.query("SELECT * FROM Class " + query, (err, result) => {
    console.log(err, result);
    res.send(err || result);
    // res.sendStatus(err ? 404 : 200);
  });
});

app.listen(3001, (err) => console.log(err || "Server Started"));

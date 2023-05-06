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

//------------------------ Class routes --------------------------------

app
  .route("/class")
  .get((req, res) => {
    const id = req.query.id;
    const query = "WHERE class_id = " + id ? id : ";";
    connection.query("SELECT * FROM Class " + query, (err, result) => {
      res.send(err ? [] : result);
    });
  })
  .post((req, res) => {
    console.log(req.body);
    const { class_name, duration, classroom, price } = req.body;
    connection.query(
      `INSERT INTO Class (class_name, duration, classroom, price) VALUES ("${class_name}", ${Number(
        duration
      )}, ${Number(classroom)}, ${price})`,
      (err) => {
        res.sendStatus(err ? 201 : 200);
      }
    );
  });

//-------------------------- Teacher routes --------------------------------

app
  .route("/teacher")
  .get((req, res) => {
    const id = req.query.id;
    const query = "WHERE prof_id = " + id ? id : ";";
    connection.query(`SELECT * From Teacher ${query}`, (err, result) => {
      res.send(err ? [] : result);
    });
  })
  .post((req, res) => {
    console.log(req.body);
    const { fname, lname, phoneNum, typeOfPayment, salary, class_id } =
      req.body;
    connection.query(
      `INSERT INTO Teacher (fname, lname, phoneNum, type_of_payment, salary, class_id) Values ("${fname}", "${lname}", ${phoneNum}, ${typeOfPayment}, ${salary}, ${class_id});`,
      (err) => {
        console.log(err);
        res.sendStatus(err ? 201 : 200);
      }
    );
  });

app.listen(3001, (err) => console.log(err || "Server Started"));

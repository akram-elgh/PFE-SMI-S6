const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const date = require("./functions/function");
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

//------------------------ Class routes ------------------------------

app
  .route("/class")
  .get((req, res) => {
    const id = req.query.id;
    const query = id ? "WHERE class_id = " + id : ";";
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
    const query = id ? "WHERE prof_id = " + id : ";";
    connection.query(
      `SELECT * From Teacher AS T Join Class AS C ON T.class_id = C.class_id  ${query}`,
      (err, result) => {
        console.log(err);
        res.send(err ? [] : result);
      }
    );
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

// ------------------------ Student routes --------------------------------

app
  .route("/student")
  .get((req, res) => {
    const id = req.query.id;
    const name = req.query.name;
    let query = "";
    if (id) query = `SELECT * FROM Student WHERE id = ${id}`;
    if (name)
      query = `SELECT S.student_id AS id, S.fname, S.lname, S.level, DATE_FORMAT(S.bDate, "%d/%m/%Y") AS bDate, S.phoneNum, S.parentNum, DATE_FORMAT(S.enrolment_date, "%d/%m/%Y") AS dateOfEnrollment , C.class_name FROM Student S JOIN Class C ON S.class_id = C.class_id WHERE S.fname LIKE "${name}%" OR S.lname LIKE "${name}%" ORDER BY S.lname`;
    connection.query(query, (err, result) => {
      console.log(result);
      res.send(err ? [] : result);
    });
  })
  .post((req, res) => {
    connection.query(
      "INSERT INTO Student (fname, lname, bDate, level, phoneNum, parentNum, class_id, enrolment_date, last_payment_date) Values(?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [...Object.values(req.body), date.getDate(), date.getDate()],
      (err) => {
        console.log(err);
        res.sendStatus(err ? 201 : 200);
      }
    );
  });

app.listen(3001, (err) => console.log(err || "Server Started"));

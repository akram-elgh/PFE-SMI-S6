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
    const query = id ? " WHERE C.class_id = " + id : "";
    connection.query(
      "SELECT C.class_id, C.class_name, C.duration, C.classroom, C.price, C.teacher_id, T.teacher_id, T.lname, T.fname, T.salary, T.type_of_payment , COUNT(S.student_id) AS student_count FROM Class AS C LEFT JOIN Teacher AS T ON C.teacher_id = T.teacher_id LEFT JOIN Student AS S ON C.class_id = S.class_id" +
        query +
        " GROUP BY C.class_id, C.class_name, C.duration, C.teacher_id, C.classroom, C.price,T.teacher_id, T.lname, T.fname, T.salary, T.type_of_payment ",
      (err, result) => {
        console.log(err);
        res.send(err ? [] : result);
      }
    );
  })
  .post((req, res) => {
    console.log(req.body);
    const { class_name, duration, classroom, price, teacher_id } = req.body;
    connection.query(
      `INSERT INTO Class (class_name, duration, classroom, price, teacher_id) VALUES ("${class_name}", ${Number(
        duration
      )}, ${Number(classroom)}, ${price}, ${teacher_id})`,
      (err) => {
        console.log(err);
        res.sendStatus(err ? 201 : 200);
      }
    );
  })
  .put((req, res) => {
    const { class_id, class_name, duration, classroom, price, teacher_id } =
      req.body;
    connection.query(
      `UPDATE Class SET class_name = "${class_name}" , duration = ${duration}, classroom = ${classroom}, price = ${price}, teacher_id = ${teacher_id} WHERE class_id = ${class_id}`,
      (err) => {
        console.log(err);
        res.sendStatus(err ? 201 : 200);
      }
    );
  })
  .delete((req, res) => {
    const class_id = req.query.id;
    connection.query(
      `DELETE FROM Student WHERE class_id = ${class_id}`,
      (err) => {
        if (err) res.sendStatus(err);
        else {
          connection.query(
            `DELETE FROM Schedule WHERE class_id = ${class_id}`,
            (err) => {
              if (err) res.sendStatus(err);
              else {
                connection.query(
                  `DELETE FROM Class WHERE class_id = ${class_id}`,
                  (err) => {
                    console.log(err);
                    res.sendStatus(err ? 201 : 200);
                  }
                );
              }
            }
          );
        }
      }
    );
  });

//-------------------------- Teacher routes --------------------------------

app
  .route("/teacher")
  .get((req, res) => {
    const id = req.query.id;
    const query = id ? "WHERE teacher_id = " + id : ";";
    connection.query(`SELECT * From Teacher ${query}`, (err, result) => {
      console.log(err);
      res.send(err ? [] : result);
    });
  })
  .post((req, res) => {
    const { fname, lname, phoneNum, typeOfPayment = 0, salary = 0 } = req.body;
    connection.query(
      `INSERT INTO Teacher (fname, lname, phoneNum, type_of_payment, salary) Values ("${fname}", "${lname}", ${phoneNum}, ${typeOfPayment}, ${salary});`,
      (err) => {
        console.log(err);
        res.sendStatus(err ? 201 : 200);
      }
    );
  })
  .put((req, res) => {
    const { teacher_id, phoneNum, type_of_payment, salary } = req.body;
    connection.query(
      `UPDATE Teacher SET phoneNum = "${phoneNum}",type_of_payment = ${type_of_payment}, salary = ${salary} WHERE teacher_id = ${teacher_id}`,
      (err) => {
        console.log(err);
        res.sendStatus(err ? 201 : 200);
      }
    );
  })
  .delete((req, res) => {
    const teacher_id = req.query.id;
    connection.query(
      `DELETE FROM Teacher WHERE teacher_id = ${teacher_id}`,
      (err) => {
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
    if (id)
      query = `SELECT S.student_id, S.fname, S.lname, S.level, DATE_FORMAT(S.bDate, "%d/%m/%Y") AS bDate, S.phoneNum, S.parentNum, DATE_FORMAT(S.enrolment_date, "%d/%m/%Y") AS dateOfEnrollment , C.class_name, C.class_id FROM Student S JOIN Class C ON S.class_id = C.class_id WHERE S.student_id = ${id} ORDER BY S.lname`;
    if (name)
      query = `SELECT S.student_id, S.fname, S.lname, S.level, DATE_FORMAT(S.bDate, "%d/%m/%Y") AS bDate, S.phoneNum, S.parentNum, DATE_FORMAT(S.enrolment_date, "%d/%m/%Y") AS dateOfEnrollment , C.class_name FROM Student S JOIN Class C ON S.class_id = C.class_id WHERE S.fname LIKE "${name}%" OR S.lname LIKE "${name}%" ORDER BY S.lname`;
    connection.query(query, (err, result) => {
      res.send(err ? [] : result);
    });
  })
  .post((req, res) => {
    connection.query(
      "INSERT INTO Student (fname, lname, bDate, level, phoneNum, parentNum, class_id, enrolment_date, last_payment_date) Values(?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [...Object.values(req.body), date.getDate(), date.getDate()],
      (err) => {
        res.sendStatus(err ? 201 : 200);
      }
    );
  })
  .put((req, res) => {
    console.log(req.body);
    let {
      student_id,
      fname,
      lname,
      bDate,
      phoneNum,
      parentNum = "",
      level,
      class_id,
      new_class_id,
    } = req.body;
    new_class_id = new_class_id || class_id;
    console.log(new_class_id);
    let query = "";
    if (class_id === new_class_id)
      query = `UPDATE Student SET bDate = "${date.transfromDate(
        bDate.slice(0, 10)
      )}", phoneNUm = ${phoneNum}, parentNUm = "${parentNum}", level = ${level} WHERE student_id = ${student_id} OR fname = "${fname}" AND lname = "${lname}" AND bdate = "${date.transfromDate(
        bDate.slice(0, 10)
      )}"`;
    else
      query = `UPDATE Student SET class_id = ${new_class_id} WHERE student_id = ${student_id}`;
    connection.query(query, (err) => {
      console.log(err);
      res.sendStatus(err ? 201 : 200);
    });
  })
  .delete((req, res) => {
    const student_id = req.query.id;
    connection.query(
      `DELETE FROM Student WHERE student_id = ${student_id}`,
      (err) => {
        console.log(err);
        res.sendStatus(err ? 201 : 200);
      }
    );
  });

//-------------------- Payment routes ----------------------------

app
  .route("/payment")
  .get((req, res) => {
    const name = req.query.name;
    const id = req.query.id;
    let query = "";
    if (name)
      query = `SELECT S.student_id AS student_id, S.fname, S.lname, DATE_FORMAT(S.last_payment_date, "%d/%m/%Y") AS date, S.last_payed_month AS month , C.class_name, C.price FROM Student S JOIN Class C ON S.class_id = C.class_id WHERE S.fname LIKE "${name}%" OR S.lname LIKE "${name}%" ORDER BY S.lname`;
    if (id)
      query = `SELECT S.student_id AS student_id, S.fname, S.lname, DATE_FORMAT(S.last_payment_date, "%d/%m/%Y") AS date, S.last_payed_month AS month , C.class_name, C.price FROM Student S JOIN Class C ON S.class_id = C.class_id WHERE S.student_id = ${id} ORDER BY S.lname`;
    connection.query(query, (err, result) => {
      res.send(err ? [] : result);
    });
  })
  .post((req, res) => {
    const { student_id, month } = req.body;
    connection.query(
      `UPDATE Student SET last_payed_month = ${month}, last_payment_date = "${date.getDate()}" WHERE student_id = ${student_id}`,
      (err) => {
        res.sendStatus(err ? 201 : 200);
      }
    );
  });

// --------------------------- Schedule routes ------------------------

app
  .route("/schedule")
  .get((req, res) => {
    const day = req.query.day;
    connection.query(
      `SELECT * FROM Schedule AS S JOIN Class AS C ON S.class_id = C.class_id WHERE S.day = ${day} ORDER BY C.classroom`,
      (err, result) => {
        res.send(err ? [] : result);
      }
    );
  })
  .post((req, res) => {
    const { class_id, day, hour } = req.body;
    connection.query(
      `INSERT INTO Schedule (hour, day, class_id) Values (${hour}, ${day}, ${class_id})`,
      (err) => {
        res.sendStatus(err ? 201 : 200);
      }
    );
  })
  .put((req, res) => {
    const { hour, id } = req.body;
    connection.query(
      `UPDATE Schedule SET hour = ${hour} WHERE id = ${id}`,
      (err) => {
        res.sendStatus(err ? 201 : 200);
      }
    );
  })
  .delete((req, res) => {
    const id = req.query.id;
    connection.query(`DELETE from Schedule WHERE id = ${id}`, (err) => {
      console.log(err);
      res.sendStatus(err ? 201 : 200);
    });
  });

app.listen(3001, (err) => console.log(err || "Server Started"));

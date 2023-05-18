CREATE TABLE Teacher(
  teacher_id INT NOT NULL AUTO_INCREMENT,
  fname VARCHAR(255) NOT NULL,
  lname VARCHAR(255) NOT NULL,
  phoneNum VARCHAR(255) NOT NULL,
  type_of_payment VARCHAR(255) NOT NULL DEFAULT 0,
  salary INT DEFAULT 0,
  PRIMARY KEY (teacher_id),
)
CREATE TABLE Class(
  class_id INT NOT NULL AUTO_INCREMENT,
  class_name VARCHAR(255) NOT NULL,
  duration INT NOT NULL,
  classroom INT DEFAULT 0,
  price INT DEFAULT 0,
  teacher_id INT NOT NULL,
  PRIMARY KEY (class_id),
  FOREIGN KEY (teacher_id) REFERENCES Teacher (teacher_id)
)

CREATE TABLE Student(
  student_id INT NOT NULL AUTO_INCREMENT,
  fname VARCHAR(255) NOT NULL,
  lname VARCHAR(255) NOT NULL,
  bDate DATE NOT NULL,
  level INT,
  phoneNum VARCHAR(255),
  parentNum VARCHAR(255),
  enrolment_date DATE NOT NULL,
  last_payment_date DATE NOT NULL,
  last_payed_month INT NOT NULL,
  class_id INT NOT NULL,
  PRIMARY KEY (student_id),
  FOREIGN KEY (class_id) REFERENCES Class(class_id)
)


CREATE TABLE Schedule(
  id INT NOT NULL AUTO_INCREMENT,
  day INT NOT NULL,
  hour INT NOT NULL,
  class_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (class_id) REFERENCES Class(class_id)
)
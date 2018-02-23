DROP DATABASE IF EXISTS restaurantDB;
CREATE database restaurantDB;

USE restaurantDB;

CREATE TABLE tables (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100) NULL,
  user_id INT(100) NULL,
  waitlist INT(1),
  PRIMARY KEY (id)
);

SELECT * FROM tables;

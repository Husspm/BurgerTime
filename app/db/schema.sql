CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(55),
devoured BOOLEAN NOT NULL DEFAULT FALSE,
date_made TIMESTAMP,
PRIMARY KEY(id)
);

SELECT * FROM burgers;
SELECT * FROM chefs;

DROP TABLE burgers;

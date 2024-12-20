CREATE DATABASE skillex_task;
USE skillex_task;

CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE combinations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    combination JSON NOT NULL
);

CREATE TABLE responses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    response JSON NOT NULL
);

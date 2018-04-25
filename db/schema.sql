DROP DATABASE IF EXISTS babies_db;
CREATE DATABASE babies_db;
USE babies_db;

CREATE TABLE names(
    id INTEGER(4) NOT NULL AUTO_INCREMENT, 
    name VARCHAR(70) NOT NULL, 
    listIt BOOLEAN  DEFAULT false,
    PRIMARY KEY (id)
    );



    

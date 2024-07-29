drop database COMMERCE_GRAPHQL_DB;
CREATE DATABASE COMMERCE_GRAPHQL_DB;
USE COMMERCE_GRAPHQL_DB;

CREATE TABLE category_tab (
	code varchar(25) NOT NULL PRIMARY KEY,
	name varchar(100) not null,
	categoryUrl varchar(100) not null,
    parentCode varchar(25),
	active integer not null default 0
);

CREATE TABLE product_tab (
	code varchar(25) NOT NULL PRIMARY KEY,
	title varchar(100) not null,
	description VARCHAR(100),
	price double not null default 0.00,
	active integer not null default 0,
    stock integer not null,
    imageUrl varchar(100),
    categoryCode varchar(25) not null,
    FOREIGN KEY (categoryCode) REFERENCES category_tab(code) ON DELETE CASCADE ON UPDATE CASCADE
);

desc product_tab;
desc category_tab;
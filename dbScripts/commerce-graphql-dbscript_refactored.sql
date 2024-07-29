drop database COMMERCE_GRAPHQL_REFACTORED_DB;
CREATE DATABASE COMMERCE_GRAPHQL_REFACTORED_DB;
USE COMMERCE_GRAPHQL_REFACTORED_DB;

CREATE TABLE category_tab (
	code varchar(50) NOT NULL PRIMARY KEY,
	name VARCHAR(100) not null,
	categoryUrl VARCHAR(100) not null,
    parentId varchar(50),
	active integer not null default 0
);

CREATE TABLE product_tab (
	code varchar(50) NOT NULL PRIMARY KEY,
	title VARCHAR(200) not null,
	description VARCHAR(100),
	price double not null default 0.00,
	active integer not null default 0,
    stock integer not null,
    imageUrl varchar(100)
);

CREATE TABLE category2category_tab (
	code varchar(50) NOT NULL PRIMARY KEY,
    parentCategoryCode varchar(50) not null,
    childCategoryCode varchar(50) not null,
    FOREIGN KEY (parentCategoryCode) REFERENCES category_tab(code) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (childCategoryCode) REFERENCES category_tab(code) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE category2product_tab (
	code varchar(50) NOT NULL PRIMARY KEY,
    categoryCode varchar(50) not null,
    productCode varchar(50) not null,
    FOREIGN KEY (categoryCode) REFERENCES category_tab(code) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (productCode) REFERENCES product_tab(code) ON DELETE CASCADE ON UPDATE CASCADE
);
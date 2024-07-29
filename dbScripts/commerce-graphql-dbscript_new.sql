drop database COMMERCE_GRAPHQL_DB;
CREATE DATABASE COMMERCE_GRAPHQL_DB;
USE COMMERCE_GRAPHQL_DB;

CREATE TABLE category_tab (
	code varchar(50) NOT NULL PRIMARY KEY,
	name VARCHAR(100) not null,
    description VARCHAR(255),
	imageUrl varchar(255),
    parentId varchar(50),
	active integer not null default 0
);

CREATE TABLE product_tab (
	code varchar(50) NOT NULL PRIMARY KEY,
	title VARCHAR(200) not null,
	description VARCHAR(100),
	price double not null default 0.00,
	active integer not null default 0,    
    imageUrl varchar(255),
    wishlist integer not null default 0,
    badgeString varchar(255)
);

CREATE TABLE category2product_tab (
    categoryCode varchar(50) not null,
    productCode varchar(50) not null,
    PRIMARY KEY (categoryCode, productCode),
    FOREIGN KEY (categoryCode) REFERENCES category_tab(code) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (productCode) REFERENCES product_tab(code) ON DELETE CASCADE ON UPDATE CASCADE
);
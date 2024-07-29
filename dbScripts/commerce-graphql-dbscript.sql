drop database COMMERCE_GRAPHQL_DB;
CREATE DATABASE COMMERCE_GRAPHQL_DB;
USE COMMERCE_GRAPHQL_DB;

CREATE TABLE product_tab (
	code INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(200) not null,
	description VARCHAR(100),
	price double not null default 0.00,
	active integer not null default 0,
    stock integer not null,
    imageUrl varchar(100),
    categoryCode int not null,
    FOREIGN KEY (categoryCode) REFERENCES category_tab(code) ON DELETE CASCADE ON UPDATE CASCADE
) AUTO_INCREMENT=1000;

CREATE TABLE category_tab (
	code INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) not null,
	categoryUrl VARCHAR(100) not null,
	active char(1) default 'T'
) AUTO_INCREMENT=3000;

CREATE TABLE category_category_tab (
	code INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	parentCategoryCode int not null,
	childCategoryCode int not null,
	FOREIGN KEY (parentCategoryCode) REFERENCES category_tab(code),
	FOREIGN KEY (childCategoryCode) REFERENCES category_tab(code)
) AUTO_INCREMENT=5000;

CREATE TABLE category_product_tab (
	code INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	categoryCode int not null,
	productCode int not null,
	FOREIGN KEY (categoryCode) REFERENCES category_tab(code),
	FOREIGN KEY (productCode) REFERENCES product_tab(code)
) AUTO_INCREMENT=10000;

desc category_product_tab;
select * from category_category_tab;

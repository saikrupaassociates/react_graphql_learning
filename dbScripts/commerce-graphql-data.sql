USE COMMERCE_GRAPHQL_DB;
INSERT INTO product_tab(title, description, saleable) VALUES('Samsung Mobile M56', 'Samsung Mobile M56', 'T');
INSERT INTO product_tab(title, description, saleable) VALUES('Samsung Galaxy S22', 'Samsung Galaxy S22', 'T');
INSERT INTO product_tab(title, description, saleable) VALUES('VIVO Mobile L67', 'VIVO Mobile L67', 'T');
INSERT INTO product_tab(title, description, saleable) VALUES('Lenovo T95', 'Lenovo T95', 'T');
INSERT INTO product_tab(title, description, saleable) VALUES('Samsung NEO LED 55 Inch', 'Samsung NEO LED 55 Inch', 'T');
INSERT INTO product_tab(title, description, saleable) VALUES('Samsung NEO LED 65 Inch', 'Samsung NEO LED 65 Inch', 'T');
INSERT INTO product_tab(title, description, saleable) VALUES('Samsung NEO LED 85 Inch', 'Samsung NEO LED 85 Inch', 'T');
INSERT INTO product_tab(title, description, saleable) VALUES('Samsung NEO LED 35 Inch', 'Samsung NEO LED 35 Inch', 'T');

insert into category_tab(name, categoryUrl, active) values('Smartphone','\smartphone','T');
insert into category_tab(name, categoryUrl, active) values('Laptop','\laptop','T');
insert into category_tab(name, categoryUrl, active) values('TV','\tv','T');
insert into category_tab(name, categoryUrl, active) values('LED TV','\ledtv','T');

insert into category_category_tab(parentCategoryCode, childCategoryCode) values((select code from category_tab where name='TV'), (select code from category_tab where name='LED TV'));

insert into category_product_tab(categoryCode, productCode) values((select code from category_tab where name='LED TV'), (select code from product_tab where title='Samsung NEO LED 55 Inch'));
insert into category_product_tab(categoryCode, productCode) values((select code from category_tab where name='LED TV'), (select code from product_tab where title='Samsung NEO LED 65 Inch'));
insert into category_product_tab(categoryCode, productCode) values((select code from category_tab where name='LED TV'), (select code from product_tab where title='Samsung NEO LED 85 Inch'));
insert into category_product_tab(categoryCode, productCode) values((select code from category_tab where name='LED TV'), (select code from product_tab where title='Samsung NEO LED 35 Inch'));

insert into category_product_tab(categoryCode, productCode) values((select code from category_tab where name='Smartphone'), (select code from product_tab where title='VIVO Mobile L67'));
insert into category_product_tab(categoryCode, productCode) values((select code from category_tab where name='Smartphone'), (select code from product_tab where title='Samsung Mobile M56'));
insert into category_product_tab(categoryCode, productCode) values((select code from category_tab where name='Laptop'), (select code from product_tab where title='Lenovo T95'));


select * from product_tab;
update product_tab set saleable='F' where code=1002;
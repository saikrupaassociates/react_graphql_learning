USE COMMERCE_GRAPHQL_DB;

insert into category_tab(code, name, categoryUrl, active) values('34c3e675-7d7f-4ccd-bc6e-4086913ff3e8', 'Smartphone','\smartphone',1);
insert into category_tab(code, name, categoryUrl, active) values('7efba124-3822-4123-b53f-312cbeb637af', 'Laptop','\laptop', 1);
insert into category_tab(code, name, categoryUrl, active) values('b0c058e0-50d4-4e05-9f54-1ee556076b71', 'TV',"\television", 1);
insert into category_tab(code, name, categoryUrl, active) values('9d7ebe37-f6bf-4e23-9fc4-26d56d32875d', 'Smart LED TV','\ledtv', 1);

INSERT INTO product_tab(code, title, description, price, active, stock, imageUrl, categoryCode) VALUES('ba8f3b2d-2e58-402f-a4ae-7d665b4ae03d', 'Samsung Mobile M56', 'Samsung Mobile M56', 15999.99, 1, 100, '/samsung_mobile_m_56', (select code from category_tab where name='Smartphone'));
INSERT INTO product_tab(code, title, description, price, active, stock, imageUrl, categoryCode) VALUES('3e6f080a-801b-4e41-afe2-b4c448897e9d', 'Samsung Galaxy S22', 'Samsung Galaxy S22', 65999.99, 1, 10, '/samsung_galaxy_s_22', (select code from category_tab where name='Smartphone'));
INSERT INTO product_tab(code, title, description, price, active, stock, imageUrl, categoryCode) VALUES('037eece6-91a0-424b-8845-a9649555e94b', 'ThinkBook 16 40.64cms', 'ThinkBook 16 40.64cms', 65999.99, 1, 25, '/lenovo_tb_16', (select code from category_tab where name='Laptop'));
INSERT INTO product_tab(code, title, description, price, active, stock, imageUrl, categoryCode) VALUES('872bd9b7-dc54-4955-a2f2-9449b6a7221f', 'ThinkPad T14s Gen 5', 'ThinkPad T14s Gen 5', 105999.99, 1, 25, '/lenovo_tp_14', (select code from category_tab where name='Laptop'));
INSERT INTO product_tab(code, title, description, price, active, stock, imageUrl, categoryCode) VALUES('b2413a3c-9204-4b2e-89ab-314ebb1a8f43', 'Samsung NEO LED 55 Inch', 'Samsung NEO LED 55 Inch', 151999.99, 1, 100, 'samsung_neo_led55',(select code from category_tab where name='LED TV'));
INSERT INTO product_tab(code, title, description, price, active, stock, imageUrl, categoryCode) VALUES('c06559cb-5852-470e-b2ab-ca859ad31bb6', 'Samsung NEO LED 65 Inch', 'Samsung NEO LED 65 Inch', 251999.99, 1, 100, 'samsung_neo_led65',(select code from category_tab where name='LED TV'));
INSERT INTO product_tab(code, title, description, price, active, stock, imageUrl, categoryCode) VALUES('48790987-ae45-418b-bdcc-7b9c526b24f6', 'Samsung NEO LED 65 Inch', 'Samsung NEO LED 68 Inch', 351999.99, 1, 100, 'samsung_neo_led85',(select code from category_tab where name='LED TV'));


update category_tab set parentId='b0c058e0-50d4-4e05-9f54-1ee556076b71' where code='9d7ebe37-f6bf-4e23-9fc4-26d56d32875d';

select c.name, c.code, pc.name, pc.code as 'Super Category' from category_tab c, category_tab pc
where c.code='9d7ebe37-f6bf-4e23-9fc4-26d56d32875d'
and c.parentId=pc.code;

update category_tab set active=0 where code='b0c058e0-50d4-4e05-9f54-1ee556076b71';

select * from category_tab;
select * from product_tab;


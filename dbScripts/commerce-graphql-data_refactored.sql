USE COMMERCE_GRAPHQL_REFACTORED_DB;

INSERT INTO product_tab(code, title, description, price, active, stock, imageUrl) VALUES('ba8f3b2d-2e58-402f-a4ae-7d665b4ae03d', 'Samsung Mobile M56', 'Samsung Mobile M56', 15999.99, 1, 100, '/samsung_mobile_m_56');
INSERT INTO product_tab(code, title, description, price, active, stock, imageUrl) VALUES('3e6f080a-801b-4e41-afe2-b4c448897e9d', 'Samsung Galaxy S22', 'Samsung Galaxy S22', 65999.99, 1, 10, '/samsung_galaxy_s_22');
INSERT INTO product_tab(code, title, description, price, active, stock, imageUrl) VALUES('037eece6-91a0-424b-8845-a9649555e94b', 'ThinkBook 16 40.64cms', 'ThinkBook 16 40.64cms', 65999.99, 1, 25, '/lenovo_tb_16');
INSERT INTO product_tab(code, title, description, price, active, stock, imageUrl) VALUES('872bd9b7-dc54-4955-a2f2-9449b6a7221f', 'ThinkPad T14s Gen 5', 'ThinkPad T14s Gen 5', 105999.99, 1, 25, '/lenovo_tp_14');
INSERT INTO product_tab(code, title, description, price, active, stock, imageUrl) VALUES('b2413a3c-9204-4b2e-89ab-314ebb1a8f43', 'Samsung NEO LED 55 Inch', 'Samsung NEO LED 55 Inch', 151999.99, 1, 100, 'samsung_neo_led55');
INSERT INTO product_tab(code, title, description, price, active, stock, imageUrl) VALUES('c06559cb-5852-470e-b2ab-ca859ad31bb6', 'Samsung NEO LED 65 Inch', 'Samsung NEO LED 65 Inch', 251999.99, 1, 100, 'samsung_neo_led65');
INSERT INTO product_tab(code, title, description, price, active, stock, imageUrl) VALUES('48790987-ae45-418b-bdcc-7b9c526b24f6', 'Samsung NEO LED 85 Inch', 'Samsung NEO LED 85 Inch', 351999.99, 1, 100, 'samsung_neo_led85');

insert into category_tab(code, name, categoryUrl, active) values('34c3e675-7d7f-4ccd-bc6e-4086913ff3e8', 'Smartphone','smartphone',1);
insert into category_tab(code, name, categoryUrl, active) values('7efba124-3822-4123-b53f-312cbeb637af', 'Laptop','laptop', 1);
insert into category_tab(code, name, categoryUrl, active) values('b0c058e0-50d4-4e05-9f54-1ee556076b71', 'TV','television', 1);
insert into category_tab(code, name, categoryUrl, active) values('9d7ebe37-f6bf-4e23-9fc4-26d56d32875d', 'Smart TV','ledtv', 1);
insert into category_tab(code, name, categoryUrl, active) values('cbc0c721-973a-4617-9a6b-bfa5a98b7af7', 'Camera','camera', 1);
insert into category_tab(code, name, categoryUrl, active) values('1eadd3f5-464e-4c9f-8c1c-c8a3ccdfc200', 'DSLR','dslr', 1);
insert into category_tab(code, name, categoryUrl, active) values('f58610f2-7f07-4baf-85ec-e33c8ef1c38b', 'Point & Shoot','pointshoot', 1);

insert into category2category_tab(code, parentCategoryCode, childCategoryCode) values('5a8d0ac6-6b28-46e9-89bf-e5ab2d4eb388', (select code from category_tab where name='TV'), (select code from category_tab where name='Smart TV'));
insert into category2category_tab(code, parentCategoryCode, childCategoryCode) values('4d02062e-2b42-4108-bd63-a1363d47103a', (select code from category_tab where name='Camera'), (select code from category_tab where name='DSLR'));
insert into category2category_tab(code, parentCategoryCode, childCategoryCode) values('979f6f0a-e6b8-4cae-99b5-4216c106a0cc', (select code from category_tab where name='TV'), (select code from category_tab where name='Point & Shoot'));

insert into category2product_tab(code, categoryCode, productCode) values('595b863c-493a-422d-9bc5-de672390cc8e', (select code from category_tab where name='Smart TV'), (select code from product_tab where title='Samsung NEO LED 55 Inch'));
insert into category2product_tab(code, categoryCode, productCode) values('0dd2dc60-c8b4-49d2-ac76-04d8d0165d39', (select code from category_tab where name='Smart TV'), (select code from product_tab where title='Samsung NEO LED 65 Inch'));
insert into category2product_tab(code, categoryCode, productCode) values('ba45e8a0-b4ca-445b-96b2-fa94d1990d4d', (select code from category_tab where name='Smart TV'), (select code from product_tab where title='Samsung NEO LED 85 Inch'));

insert into category2product_tab(code, categoryCode, productCode) values('a0375515-2ca6-4b82-abb3-2672d5b2abbb', (select code from category_tab where name='Laptop'), (select code from product_tab where title='ThinkBook 16 40.64cms'));
insert into category2product_tab(code, categoryCode, productCode) values('83178701-dd14-4cc8-a855-2daddfbc4e13', (select code from category_tab where name='Laptop'), (select code from product_tab where title='ThinkPad T14s Gen 5'));

insert into category2product_tab(code, categoryCode, productCode) values('10b29872-a9ad-41bc-b4f7-3daef74b096b', (select code from category_tab where name='Smartphone'), (select code from product_tab where title='Samsung Mobile M56'));
insert into category2product_tab(code, categoryCode, productCode) values('fe0d776e-22c5-4851-b7a2-8cbd3a0060c9', (select code from category_tab where name='Smartphone'), (select code from product_tab where title='Samsung Galaxy S22'));





update category_tab set parentId='b0c058e0-50d4-4e05-9f54-1ee556076b71' where code='9d7ebe37-f6bf-4e23-9fc4-26d56d32875d';

select c.name, c.code, pc.name, pc.code as 'Super Category' from category_tab c, category_tab pc
where c.code='9d7ebe37-f6bf-4e23-9fc4-26d56d32875d'
and c.parentId=pc.code;

update category_tab set active=0 where code='b0c058e0-50d4-4e05-9f54-1ee556076b71';

select * from category_tab;
select * from product_tab;




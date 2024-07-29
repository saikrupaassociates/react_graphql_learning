USE COMMERCE_GRAPHQL_DB;
insert into category_tab(code, name, description, imageUrl, parentId, active) values('100-100-1001','Category A','This is Root Category A','100-100-1001.jpg','',1);
insert into category_tab(code, name, description, imageUrl, parentId, active) values('100-100-1002','Category A1','This is Child Category A1','100-100-1002.jpg','100-100-1001',1);
insert into category_tab(code, name, description, imageUrl, parentId, active) values('100-100-1003','Category A2','This is Child Category A2','100-100-1003.jpg','100-100-1001',1);

insert into category_tab(code, name, description, imageUrl, parentId, active) values('100-100-1004','Category A11','This is Child Category A11','100-100-1004.jpg','100-100-1002',1);-- Leaf
insert into category_tab(code, name, description, imageUrl, parentId, active) values('100-100-1005','Category A12','This is Child Category A12','100-100-1005.jpg','100-100-1002',1);-- Leaf

insert into category_tab(code, name, description, imageUrl, parentId, active) values('100-100-1006','Category A21','This is Child Category A21','100-100-1006.jpg','100-100-1003',1);-- Leaf
insert into category_tab(code, name, description, imageUrl, parentId, active) values('100-100-1007','Category A22','This is Child Category A22','100-100-1007.jpg','100-100-1003',1);-- Leaf

insert into category_tab(code, name, description, imageUrl, parentId, active) values('100-100-1008','Category B','This is Root Category B','100-100-1008.jpg','',1);
insert into category_tab(code, name, description, imageUrl, parentId, active) values('100-100-1009','Category B1','This is Child Category B1','100-100-1009.jpg','100-100-1008',1);
insert into category_tab(code, name, description, imageUrl, parentId, active) values('100-100-1010','Category B2','This is Child Category B2','100-100-1010.jpg','100-100-1008',1);

insert into category_tab(code, name, description, imageUrl, parentId, active) values('100-100-1011','Category B11','This is Child Category B11','100-100-1011.jpg','100-100-1009',1); -- Leaf
insert into category_tab(code, name, description, imageUrl, parentId, active) values('100-100-1012','Category B12','This is Child Category B12','100-100-1012.jpg','100-100-1009',1);-- Leaf

insert into category_tab(code, name, description, imageUrl, parentId, active) values('100-100-1013','Category B21','This is Child Category B21','100-100-1013.jpg','100-100-1010',1);-- Leaf
insert into category_tab(code, name, description, imageUrl, parentId, active) values('100-100-1014','Category B22','This is Child Category B22','100-100-1014.jpg','100-100-1010',1);-- Leaf

insert into product_tab(code, title, description, active, imageUrl, price, badgeString) values('500-200-1000','Product 1','This is Product 1',1,'500-200-1000.jpg',99.99, 'New, Arrival');
insert into product_tab(code, title, description, active, imageUrl, price, badgeString) values('500-200-1001','Product 2','This is Product 2',1,'500-200-1001.jpg',99.99, 'BestSeller');
insert into product_tab(code, title, description, active, imageUrl, price, badgeString) values('500-200-1002','Product 3','This is Product 3',1,'500-200-1002.jpg',99.99, 'Moving Fast');
insert into product_tab(code, title, description, active, imageUrl, price, badgeString) values('500-200-1003','Product 4','This is Product 4',1,'500-200-1003.jpg',99.99, 'Only 5 Available');
insert into product_tab(code, title, description, active, imageUrl, price, badgeString) values('500-200-1004','Product 5','This is Product 5',1,'500-200-1004.jpg',99.99,'');
insert into product_tab(code, title, description, active, imageUrl, price, badgeString) values('500-200-1005','Product 6','This is Product 6',1,'500-200-1005.jpg',99.99,'');
insert into product_tab(code, title, description, active, imageUrl, price, badgeString) values('500-200-1006','Product 7','This is Product 7',1,'500-200-1006.jpg',99.99,'');
insert into product_tab(code, title, description, active, imageUrl, price) values('500-200-1007','Product 8','This is Product 8',1,'500-200-1007.jpg',99.99);
insert into product_tab(code, title, description, active, imageUrl, price) values('500-200-1008','Product 9','This is Product 9',1,'500-200-1008.jpg',99.99);
insert into product_tab(code, title, description, active, imageUrl, price) values('500-200-1009','Product 10','This is Product 10',1,'500-200-1009.jpg',99.99);
insert into product_tab(code, title, description, active, imageUrl, price) values('500-200-1010','Product 11','This is Product 11',1,'500-200-1010.jpg',99.99);
insert into product_tab(code, title, description, active, imageUrl, price) values('500-200-1011','Product 12','This is Product 12',1,'500-200-1011.jpg',99.99);
insert into product_tab(code, title, description, active, imageUrl, price, badgeString) values('500-200-1012','Product 13','This is Product 13',1,'500-200-1012.jpg',99.99,'');
insert into product_tab(code, title, description, active, imageUrl, price, badgeString) values('500-200-1013','Product 14','This is Product 14',1,'500-200-1013.jpg',99.99,'');
insert into product_tab(code, title, description, active, imageUrl, price, badgeString) values('500-200-1014','Product 15','This is Product 15',1,'500-200-1014.jpg',99.99,'');
insert into product_tab(code, title, description, active, imageUrl, price) values('500-200-1015','Product 16','This is Product 16',1,'500-200-1015.jpg',99.99);
insert into product_tab(code, title, description, active, imageUrl, price) values('500-200-1016','Product 17','This is Product 17',1,'500-200-1016.jpg',99.99);
insert into product_tab(code, title, description, active, imageUrl, price) values('500-200-1017','Product 18','This is Product 18',1,'500-200-1017.jpg',99.99);
insert into product_tab(code, title, description, active, imageUrl, price, badgeString) values('500-200-1018','Product 19','This is Product 19',1,'500-200-1018.jpg',99.99,'');
insert into product_tab(code, title, description, active, imageUrl, price, badgeString) values('500-200-1019','Product 20','This is Product 20',1,'500-200-1019.jpg',99.99,'');
insert into product_tab(code, title, description, active, imageUrl, price, badgeString) values('500-200-1020','Product 21','This is Product 21',1,'500-200-1020.jpg',99.99,'');
insert into product_tab(code, title, description, active, imageUrl, price, badgeString) values('500-200-1021','Product 22','This is Product 22',1,'500-200-1021.jpg',99.99,'');
insert into product_tab(code, title, description, active, imageUrl, price, badgeString) values('500-200-1022','Product 23','This is Product 23',1,'500-200-1022.jpg',99.99,'');
insert into product_tab(code, title, description, active, imageUrl, price, badgeString) values('500-200-1023','Product 24','This is Product 24',1,'500-200-1023.jpg',99.99,'');
insert into product_tab(code, title, description, active, imageUrl, price) values('500-200-1024','Product 25','This is Product 25',1,'500-200-1024.jpg',99.99);
insert into product_tab(code, title, description, active, imageUrl, price) values('500-200-1025','Product 26','This is Product 26',1,'500-200-1025.jpg',99.99);
insert into product_tab(code, title, description, active, imageUrl, price) values('500-200-1026','Product 27','This is Product 27',1,'500-200-1026.jpg',99.99);
insert into product_tab(code, title, description, active, imageUrl, price) values('500-200-1027','Product 28','This is Product 28',1,'500-200-1027.jpg',99.99);
insert into product_tab(code, title, description, active, imageUrl, price) values('500-200-1028','Product 29','This is Product 29',1,'500-200-1028.jpg',99.99);
insert into product_tab(code, title, description, active, imageUrl, price) values('500-200-1029','Product 30','This is Product 30',1,'500-200-1028.jpg',99.99);
insert into product_tab(code, title, description, active, imageUrl, price) values('500-200-1030','Product 31','This is Product 31',1,'500-200-1030.jpg',99.99);

insert into category2product_tab(categoryCode, productCode) values('100-100-1004', '500-200-1000');
insert into category2product_tab(categoryCode, productCode) values('100-100-1004', '500-200-1001');
insert into category2product_tab(categoryCode, productCode) values('100-100-1004', '500-200-1002');
insert into category2product_tab(categoryCode, productCode) values('100-100-1004', '500-200-1003');
insert into category2product_tab(categoryCode, productCode) values('100-100-1004', '500-200-1004');
insert into category2product_tab(categoryCode, productCode) values('100-100-1004', '500-200-1005');

insert into category2product_tab(categoryCode, productCode) values('100-100-1005', '500-200-1006');
insert into category2product_tab(categoryCode, productCode) values('100-100-1005', '500-200-1007');
insert into category2product_tab(categoryCode, productCode) values('100-100-1005', '500-200-1008');
insert into category2product_tab(categoryCode, productCode) values('100-100-1005', '500-200-1009');
insert into category2product_tab(categoryCode, productCode) values('100-100-1005', '500-200-1010');


insert into category2product_tab(categoryCode, productCode) values('100-100-1006', '500-200-1011');
insert into category2product_tab(categoryCode, productCode) values('100-100-1006', '500-200-1012');
insert into category2product_tab(categoryCode, productCode) values('100-100-1006', '500-200-1013');

insert into category2product_tab(categoryCode, productCode) values('100-100-1007', '500-200-1014');
insert into category2product_tab(categoryCode, productCode) values('100-100-1007', '500-200-1015');

insert into category2product_tab(categoryCode, productCode) values('100-100-1011', '500-200-1016');
insert into category2product_tab(categoryCode, productCode) values('100-100-1011', '500-200-1017');
insert into category2product_tab(categoryCode, productCode) values('100-100-1011', '500-200-1018');
insert into category2product_tab(categoryCode, productCode) values('100-100-1011', '500-200-1019');

insert into category2product_tab(categoryCode, productCode) values('100-100-1012', '500-200-1020');
insert into category2product_tab(categoryCode, productCode) values('100-100-1012', '500-200-1021');
insert into category2product_tab(categoryCode, productCode) values('100-100-1012', '500-200-1022');

insert into category2product_tab(categoryCode, productCode) values('100-100-1013', '500-200-1023');
insert into category2product_tab(categoryCode, productCode) values('100-100-1013', '500-200-1024');
insert into category2product_tab(categoryCode, productCode) values('100-100-1013', '500-200-1025');
insert into category2product_tab(categoryCode, productCode) values('100-100-1013', '500-200-1026');

insert into category2product_tab(categoryCode, productCode) values('100-100-1014', '500-200-1027');
insert into category2product_tab(categoryCode, productCode) values('100-100-1014', '500-200-1028');
insert into category2product_tab(categoryCode, productCode) values('100-100-1014', '500-200-1029');
insert into category2product_tab(categoryCode, productCode) values('100-100-1014', '500-200-1030');




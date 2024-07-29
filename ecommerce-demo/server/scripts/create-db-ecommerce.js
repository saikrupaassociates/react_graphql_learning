
import { connection } from '../db/connection.js';

const { schema } = connection;



await schema.dropTableIfExists('category');
await schema.dropTableIfExists('product'); 

  await schema.createTable('category', (table) => {
  table.text('id').notNullable().primary();
  table.text('name').notNullable();
table.text('parentId').references('id').inTable('category').onDelete('CASCADE');
});


await schema.createTable('product', (table) => {
  table.text('id').notNullable().primary();
table.text('name').notNullable();
table.text('description');
table.float('price').notNullable();
table.text('categoryId').notNullable().references('id').inTable('category').onDelete('CASCADE');
table.integer('stock').notNullable();
table.text('image'); // Add image field
table.integer('status').notNullable();
  
}); 

await connection.table('category').insert([
  {
    id: 'FjcJCHJALA4i',
    name: 'Fashion',
    parentId: 'FjcJCHJALA4i',
  },
  {
    id: 'Gu7QW9LcnF5d',
    name: 'Electronics',
    parentId: 'Gu7QW9LcnF5d',
  },
{
    id: 'Tu7QP9LenG5d',
    name: 'Furniture',
    parentId: 'Tu7QP9LenG5d',
  },


]); 

 await connection.table('product').insert([
  {
    id: 'f3YzmnBZpK0o',
    name: 'Mens Clothing',
    description: 'Mens Clothing.',
    price: 3000,
    categoryId: 'FjcJCHJALA4i',
    stock: 100,
    image: 'Cpicture1.jpg',
    status: '1',
  },
  {
    id: 'XYZNJMXFax6n',
    name: 'Womens Clothing',
    description: 'Womens Clothing.',
    price: 5000,
    categoryId: 'FjcJCHJALA4i',
    stock: 200,
    image: 'Cpicture2.jpg',
    status: '1',
  },
  {
    id: '6mA05AZxvS1R',
    name: 'Kids Clothing',
    description: 'Kids Clothing.',
    price: 2000,
    categoryId: 'FjcJCHJALA4i',
    stock: 100,
    image: 'Cpicture3.jpg',
    status: '1',
  },
{
    id: 'TmP05AZsvS1R',
    name: 'Laptop',
    description: 'Laptop Device.',
    price: 80000,
    categoryId: 'Gu7QW9LcnF5d',
    stock: 10,
    image: 'Cpicture4.jpg',
    status: '1',
  },
{
    id: 'LmT05BZsvS1H',
    name: 'Cameras',
    description: 'Cameras.',
    price: 70000,
    categoryId: 'Gu7QW9LcnF5d',
    stock: 10,
    image: 'Cpicture5.jpg',
    status: '1',
  },
{
    id: 'ZrT05BZsvS1W',
    name: 'Mobiles',
    description: 'Mobile Device.',
    price: 50000,
    categoryId: 'Gu7QW9LcnF5d',
    stock: 20,
    image: 'Cpicture6.jpg',
    status: '1',
  },
{
    id: 'XnT05BZuvS1T',
    name: 'Mattresses',
    description: 'Mattresses.',
    price: 20000,
    categoryId: 'Tu7QP9LenG5d',
    stock: 10,
    image: 'Cpicture7.jpg',
    status: '1',
  },
{
    id: 'NnT05BPuvS1M',
    name: 'Desks',
    description: 'Desks.',
    price: 30000,
    categoryId: 'Tu7QP9LenG5d',
    stock: 5,
    image: 'Cpicture8.jpg',
    status: '1',
  },	
{
    id: 'BnT05BPuvP1X',
    name: 'Cabinets',
    description: 'Cabinets.',
    price: 40000,
    categoryId: 'Tu7QP9LenG5d',
    stock: 3,
    image: 'Cpicture9.jpg',
    status: '1',
  },
]); 


/* 
   await schema.createTable('category', (table) => {
    table.text('id').notNullable().primary();
    table.text('name').notNullable();
  });


  await schema.createTable('product', (table) => {
    table.text('id').notNullable().primary();
    table.text('categoryId').notNullable()
      .references('id').inTable('category');
    table.text('name');
  });

  await connection.table('category').insert([
    {
      id: 'FjcJCHJALA4i',
      name: 'Fashion',
    },
    {
      id: 'Gu7QW9LcnF5d',
      name: 'Electronics',
    },
	{
      id: 'Tu7QP9LenG5d',
      name: 'Furniture',
    },
	
	
  ]);

   await connection.table('product').insert([
    {
      id: 'f3YzmnBZpK0o',
      categoryId: 'FjcJCHJALA4i',
      name: 'Mens Clothing',
    },
    {
      id: 'XYZNJMXFax6n',
      categoryId: 'FjcJCHJALA4i',
	  name: 'Womens Clothing',
    },
    {
      id: '6mA05AZxvS1R',
      categoryId: 'FjcJCHJALA4i',
	  name: 'Kids Clothing',
    },
	{
      id: 'TmP05AZsvS1R',
      categoryId: 'Gu7QW9LcnF5d',
	  name: 'Laptop',
    },
	{
      id: 'LmT05BZsvS1H',
      categoryId: 'Gu7QW9LcnF5d',
	  name: 'Cameras',
    },
	{
      id: 'ZrT05BZsvS1W',
      categoryId: 'Gu7QW9LcnF5d',
	  name: 'Mobiles',
    },
	{
      id: 'XnT05BZuvS1T',
      categoryId: 'Tu7QP9LenG5d',
	  name: 'Mattresses',
    },
	{
      id: 'NnT05BPuvS1M',
      categoryId: 'Tu7QP9LenG5d',
	  name: 'Desks',
    },	
	{
      id: 'BnT05BPuvP1X',
      categoryId: 'Tu7QP9LenG5d',
	  name: 'Cabinets',
    },
  ]);  */


  process.exit();
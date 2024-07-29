
import { connection } from '../db/connection.js';

const { schema } = connection;



await schema.dropTableIfExists('category');
await schema.dropTableIfExists('product'); 

  await schema.createTable('category', (table) => {
  table.text('id').notNullable().primary();
  table.text('name').notNullable();
  table.text('parentId').references('id').inTable('category').onDelete('CASCADE');
  table.text('image');
  table.text('description');
});


await schema.createTable('product', (table) => {
  table.text('id').notNullable().primary();
table.text('name').notNullable();
table.text('description');
table.float('price').notNullable();
table.text('categoryId').notNullable().references('id').inTable('category').onDelete('CASCADE');
table.integer('stock').notNullable();
table.text('image'); // Add image field
table.text('badges');
table.integer('wishlist');
  
}); 

await connection.table('category').insert([
  {
    id: '1',
    name: 'Men',
    parentId: '1',
    image: 'images/category/men-category.jpg',
    description: 'Shop the latest men fashion including clothing footwere',
  },
  {
    id: '2',
    name: 'Women',
    parentId: '2',
    image: 'images/category/Women-category.jpg',
    description: 'Shop the latest women fashion including clothing footwere',
  },
{
    id: '3',
    name: 'Kids',
    parentId: '3',
    image: 'images/category/kids-category.jpg',
    description: 'Shop the latest kids fashion including clothing footwere',
  },
  {
    id: '4',
    name: 'Clothings',
    parentId: '4',
    image: 'images/category/clothing-category.jpg',
    description: 'Explore wide range of clothing for men , women and kids',
  },
  {
    id: '5',
    name: 'Jewelry',
    parentId: '5',
    image: 'images/category/jewelry-category.jpg',
    description: 'Browse our exclusive collection of rings.',
  },
  {
    id: '6',
    name: 'Bags',
    parentId: '6',
    image: 'images/category/bags-category.jpg',
    description: 'Checkout of our varity of Bags.',
  },
  {
    id: '7',
    name: 'Footwear',
    parentId: '7',
    image: 'images/category/footwere-category.jpg',
    description: 'Step up with your style with the latest footwere.',
  },

]); 

 await connection.table('product').insert([
  {
    id: '1',
    name: 'Mens TShirt-1',
    description: 'A comfortable and stylish t-shirt for men.',
    price: 19.99,
    categoryId: '1',
    stock: 50,
    image: 'images/category/men-tshirt1.jpg',
    badges: 'New Sale',
    wishlist: 1,
  },
  {
    id: '2',
    name: 'Mens TShirt-2',
    description: 'Another stylish t-shirt for men.',
    price: 24.99,
    categoryId: '1',
    stock: 30,
    image: 'images/category/men-tshirt2.jpg',
    badges: 'Bestseller',
    wishlist: 1,
  },
  {
    id: '15',
    name: 'Mens Jacket',
    description: 'Warm and stylish jacket for men.',
    price: 59.99,
    categoryId: '1',
    stock: 20,
    image: 'images/category/men-jacket.jpg',
    badges: 'New Sale',
    wishlist: 1,
  },
{
    id: '16',
    name: 'Mens Shoes',
    description: 'Comfortable shoes for men.',
    price: 79.99,
    categoryId: '1',
    stock: 10,
    image: 'images/category/men-shoes.jpg',
    badges: '',
    wishlist: 1,
  },
{
    id: '3',
    name: 'Women Dress1',
    description: 'An elegant dress for women.',
    price: 49.99,
    categoryId: '2',
    stock: 100,
    image: 'images/category/women-dress1.jpg',
    badges: '',
    wishlist: 0,
  },
{
    id: '4',
    name: 'Women Dress2',
    description: 'An trendy dress for women.',
    price: 59.99,
    categoryId: '2',
    stock: 80,
    image: 'images/category/women-dress2.jpg',
    badges: '',
    wishlist: 0,
  },
{
    id: '17',
    name: 'Women Blouse',
    description: 'A stylish blouse for women.',
    price: 39.99,
    categoryId: '2',
    stock: 60,
    image: 'images/category/women-blouse.jpg',
    badges: 'New Sale',
    wishlist: 0,
  },
{
    id: '5',
    name: 'Kids Hoodie1',
    description: 'A cute and warm hoodie for kids.',
    price: 29.99,
    categoryId: '3',
    stock: 200,
    image: 'images/category/kids-hoodie1.jpg',
    badges: 'Bestseller',
    wishlist: 0,
  },	
{
    id: '6',
    name: 'Kids Hoodie2',
    description: 'Colorful hoodie for kids.',
    price: 34.99,
    categoryId: '3',
    stock: 150,
    image: 'images/category/kids-hoodie2.jpg',
    badges: '',
    wishlist: 0,
  },
  {
    id: '18',
    name: 'Kids T-shirt',
    description: 'A fun T-shirt for kids.',
    price: 19.99,
    categoryId: '3',
    stock: 180,
    image: 'images/category/kids-tshirt.jpg',
    badges: 'New Sale',
    wishlist: 0,
  },
  {
    id: '7',
    name: 'Mens Jeans',
    description: 'Comfortable jeans for men.',
    price: 39.99,
    categoryId: '4',
    stock: 70,
    image: 'images/category/mens-jeans.jpg',
    badges: '',
    wishlist: 0,
  },
  {
    id: '8',
    name: 'Women Skirt',
    description: 'Stylish skirt for women.',
    price: 29.99,
    categoryId: '4',
    stock: 120,
    image: 'images/category/women-skirt.jpg',
    badges: '',
    wishlist: 0,
  },
]);  


  process.exit();
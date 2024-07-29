import { connection } from '../db/connection.js';

const { schema } = connection;

export async function createProductTable() {
  await schema.dropTableIfExists('product');
  await schema.createTable('product', (table) => {
    table.text('id').notNullable().primary();
    table.text('name').notNullable();
    table.text('description');
    table.float('price').notNullable();
    table.text('categoryId').notNullable().references('id').inTable('category').onDelete('CASCADE');
    table.integer('stock').notNullable();
    table.text('image'); // Add image field
    table.text('badges'); // Add badges field
    table.boolean('wishlist').notNullable().defaultTo(false); // Add wishlist field
  });

  // Insert sample data into 'product' table
  await connection.table('product').insert([
    // Men's category (id: 1)
    {
      id: '1',
      name: 'Men\'s T-shirt 1',
      description: 'A comfortable and stylish t-shirt for men',
      price: 19.99,
      categoryId: '1',
      stock: 50,
      image: 'images/product/men-tshirt1.jpg',
      badges: 'New,Sale',
      wishlist: false,
    },
    {
      id: '2',
      name: 'Men\'s T-shirt 2',
      description: 'Another stylish t-shirt for men',
      price: 24.99,
      categoryId: '1',
      stock: 30,
      image: 'images/product/men-tshirt2.jpg',
      badges: 'Bestseller',
      wishlist: false,
    },
    {
      id: '15',
      name: 'Men\'s Jacket',
      description: 'Warm and stylish jacket for men',
      price: 59.99,
      categoryId: '1',
      stock: 20,
      image: 'images/product/men-jacket.jpg',
      badges: 'New,Sale',
      wishlist: false,
    },
    {
      id: '16',
      name: 'Men\'s Shoes',
      description: 'Comfortable shoes for men',
      price: 79.99,
      categoryId: '1',
      stock: 45,
      image: 'images/product/men-shoes.jpg',
      badges: '',
      wishlist: false,
    },
    // Women's category (id: 2)
    {
      id: '3',
      name: 'Women\'s Dress 1',
      description: 'An elegant dress for women',
      price: 49.99,
      categoryId: '2',
      stock: 100,
      image: 'images/product/women-dress1.jpg',
      badges: '',
      wishlist: false,
    },
    {
      id: '4',
      name: 'Women\'s Dress 2',
      description: 'A trendy dress for women',
      price: 59.99,
      categoryId: '2',
      stock: 80,
      image: 'images/product/women-dress2.jpg',
      badges: '',
      wishlist: false,
    },
    {
      id: '17',
      name: 'Women\'s Blouse',
      description: 'A stylish blouse for women',
      price: 39.99,
      categoryId: '2',
      stock: 60,
      image: 'images/product/women-blouse.jpg',
      badges: 'New,Sale',
      wishlist: false,
    },
    // Kids category (id: 3)
    {
      id: '5',
      name: 'Kids\' Hoodie 1',
      description: 'A cute and warm hoodie for kids',
      price: 29.99,
      categoryId: '3',
      stock: 200,
      image: 'images/product/kids-hoodie1.jpg',
      badges: '',
      wishlist: false,
    },
    {
      id: '6',
      name: 'Kids\' Hoodie 2',
      description: 'Colorful hoodie for kids',
      price: 34.99,
      categoryId: '3',
      stock: 150,
      image: 'images/product/kids-hoodie2.jpg',
      badges: 'Bestseller',
      wishlist: false,
    },
    {
      id: '18',
      name: 'Kids\' T-shirt',
      description: 'A fun t-shirt for kids',
      price: 19.99,
      categoryId: '3',
      stock: 180,
      image: 'images/product/kids-tshirt.jpg',
      badges: 'New,Sale',
      wishlist: false,
    },
    // Clothings category (id: 4)
    {
      id: '7',
      name: 'Men\'s Jeans',
      description: 'Comfortable jeans for men',
      price: 39.99,
      categoryId: '4',
      stock: 70,
      image: 'images/product/men-jeans.jpg',
      badges: '',
      wishlist: false,
    },
    {
      id: '8',
      name: 'Women\'s Skirt',
      description: 'Stylish skirt for women',
      price: 29.99,
      categoryId: '4',
      stock: 120,
      image: 'images/product/women-skirt.jpg',
      badges: '',
      wishlist: false,
    },
    {
      id: '19',
      name: 'Unisex Hoodie',
      description: 'A comfortable hoodie for everyone',
      price: 49.99,
      categoryId: '4',
      stock: 90,
      image: 'images/product/unisex-hoodie.jpg',
      badges: 'Bestseller',
      wishlist: false,
    },
    {
      id: '20',
      name: 'Kids\' Jeans',
      description: 'Durable jeans for kids',
      price: 24.99,
      categoryId: '4',
      stock: 110,
      image: 'images/product/kids-jeans.jpg',
      badges: 'New,Sale',
      wishlist: false,
    },
    // Jewelry category (id: 5)
    {
      id: '9',
      name: 'Diamond Ring',
      description: 'Exquisite diamond ring',
      price: 599.99,
      categoryId: '5',
      stock: 10,
      image: 'images/product/diamond-ring.jpg',
      badges: '',
      wishlist: false,
    },
    {
      id: '10',
      name: 'Gold Necklace',
      description: 'Elegant gold necklace',
      price: 499.99,
      categoryId: '5',
      stock: 15,
      image: 'images/product/gold-necklace.jpg',
      badges: 'Bestseller',
      wishlist: false,
    },
    {
      id: '21',
      name: 'Silver Bracelet',
      description: 'A beautiful silver bracelet',
      price: 199.99,
      categoryId: '5',
      stock: 25,
      image: 'images/product/silver-bracelet.jpg',
      badges: '',
      wishlist: false,
    },
    // Bags category (id: 6)
    {
      id: '11',
      name: 'Leather Backpack',
      description: 'Stylish leather backpack',
      price: 79.99,
      categoryId: '6',
      stock: 50,
      image: 'images/product/leather-backpack.jpg',
      badges: '',
      wishlist: false,
    },
    {
      id: '12',
      name: 'Travel Tote',
      description: 'Spacious travel tote bag',
      price: 89.99,
      categoryId: '6',
      stock: 40,
      image: 'images/product/travel-tote.jpg',
      badges: 'New,Sale',
      wishlist: false,
    },
    {
      id: '22',
      name: 'School Backpack',
      description: 'Durable backpack for school',
      price: 49.99,
      categoryId: '6',
      stock: 60,
      image: 'images/product/school-backpack.jpg',
      badges: '',
      wishlist: false,
    },
    {
      id: '23',
      name: 'Handbag',
      description: 'Elegant handbag for everyday use',
      price: 69.99,
      categoryId: '6',
      stock: 35,
      image: 'images/product/handbag.jpg',
      badges: 'Bestseller',
      wishlist: false,
    },
    // Footwear category (id: 7)
    {
      id: '13',
      name: 'Men\'s Sneakers',
      description: 'Comfortable men\'s sneakers',
      price: 59.99,
      categoryId: '7',
      stock: 80,
      image: 'images/product/men-sneakers.jpg',
      badges: '',
      wishlist: false,
    },
    {
      id: '14',
      name: 'Women\'s Sandals',
      description: 'Stylish women\'s sandals',
      price: 39.99,
      categoryId: '7',
      stock: 100,
      image: 'images/product/women-sandals.jpg',
      badges: '',
      wishlist: false,
    },
    {
      id: '24',
      name: 'Running Shoes',
      description: 'Perfect shoes for running',
      price: 79.99,
      categoryId: '7',
      stock: 70,
      image: 'images/product/running-shoes.jpg',
      badges: 'Bestseller',
      wishlist: false,
    },
    {
      id: '25',
      name: 'Kids\' Boots',
      description: 'Warm and durable boots for kids',
      price: 49.99,
      categoryId: '7',
      stock: 90,
      image: 'images/product/kids-boots.jpg',
      badges: 'New,Sale',
      wishlist: false,
    },
  ]);

  console.log('Product table created successfully');
}

// if (import.meta.url === `file://${process.argv[1]}`) {
  createProductTable().catch(err => {
    console.error('Error creating product table', err);
    process.exit(1);
  });
// }

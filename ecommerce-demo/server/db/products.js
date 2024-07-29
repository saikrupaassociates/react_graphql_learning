import { connection } from './connection.js';
import { generateId } from './ids.js';


const getProductTable = () => connection.table('product');


export async function getProducts() {
    return await getProductTable().select();
  }

  export async function getProduct(id) {
    return await getProductTable().first().where({ id });
  }

  export async function productsByCategory(categoryId) {
    return await getProductTable().select().where({ categoryId });
  }
  
export async function createProduct({name,description,price,categoryId,stock,image,badges,wishlist}){

  const product = {
      id:generateId(),
      name,
      description,
      price,
      categoryId,
      stock,
      image,
      badges,
      wishlist,
  };

  console.log(name);
  await getProductTable().insert(product);
  return product;
  
}

export async function deleteProduct(id) {
  const product = await getProductTable().first().where({ id });
  if (!product) {
    throw new Error(`Product not found: ${id}`);
  }
  await getProductTable().delete().where({ id });
  return product;
}

export async function updateProduct({ id, name, description,price,stock,image,badges,wishlist }) {
  const product = await getProductTable().first().where({ id });
  if (!product) {
    throw new Error(`Product not found: ${id}`);
  }
  const updatedFields = { name, description,price,stock,image,badges,wishlist };
  await getProductTable().update(updatedFields).where({ id });
  return { ...product, ...updatedFields };
}

export async function updateWishlistStatus(id, wishlist) {
  await getProductTable().update({ wishlist }).where({ id });
  return await getProduct(id);
}

  
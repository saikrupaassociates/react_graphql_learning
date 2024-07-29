import {getProducts,getProduct,createProduct,deleteProduct,updateProduct,productsByCategory,updateWishlistStatus} from './db/products.js'
import {getCategory} from './db/category.js'

export const resolvers = {
    Query: {

   /*  products: async () => {
     const products =await getProducts();
     return products; */
     products: () => getProducts(),

     product: (_root, { id }  ) => getProduct(id),

     productsByCategory: (_,{ categoryId }) => productsByCategory(categoryId),
     
    /*  {
      console.log('[Query.producy] args:',args);
      return getProduct(product.id);
     }, */ 
     
  },
  Product: {
    category: (product) => {
      //console.log('resolving category for product:',product);
      return getCategory(product.categoryId);
    },
},

Mutation: {
  createProduct: (_root, {name,description,price,stock,image,badges,wishlist}) => {
    const categoryId = '8';
    
    return createProduct({name,description,price,categoryId,stock,image,badges,wishlist});
  },

  deleteProduct: (_root, { id }) => deleteProduct(id),

  updateProduct: (_root, {id,name,description,price,stock,image,badges,wishlist}) => {
    const categoryId = '7';
    
    return updateProduct({id,name,description,price,categoryId,stock,image,badges,wishlist});
  },
  updateWishlistStatus: async (_, { id, wishlist }) => {
    return await updateWishlistStatus(id, wishlist);
  },

},

/*  Category: {
  products: (category) => productsByCategory(category.id),
},   */
  
};


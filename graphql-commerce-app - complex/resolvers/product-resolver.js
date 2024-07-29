import {getProducts, getCategory, getProduct} from '../database/datasource.js'
export const productResolver = {
    Query: {
        product: async (_root, {code}) => {            
            return await getProduct(code);
        },
        products: async() => {
            const dbProducts = await getProducts(); 
            return dbProducts;
        },
    },
    Product: {
        active: (product) => product.active == 1,
        category: (product) => getCategory(product.categoryCode),        
    },    
};
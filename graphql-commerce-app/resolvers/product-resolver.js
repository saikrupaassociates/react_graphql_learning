import {getProducts, getSuperCategories, getProduct, getProductsByCategoryCode, updateWishlistStatus} from '../database/datasource.js'
import { getPriceByProductCode } from '../restclient/price-api.js';
import { getStockByProductCode } from '../restclient/stock-api.js';
export const productResolver = {
    Query: {
        product: async (_root, {code}) => {            
            const product = await getProduct(code);            
            return product;
        },
        products: async() => {
            const dbProducts = await getProducts(); 
            return dbProducts;
        },
        getProductsByCategoryCode: async (_root, {categoryCode}) => {              
            const products = await getProductsByCategoryCode(categoryCode); 
            console.log("getProductsByCategoryCode :: Listing Products for Category : ", categoryCode);           
            console.log("***********   Before setting price & Currency **********");
            console.log(products);
            console.log("********************************************************");
            return products;        
        },
    },
    Product: {
        active: (product) => product.active == 1,
        superCategories: (product) => getSuperCategories(product.code),
        stockStatus: async(product) =>  {
            const stockData = await getStockByProductCode(product.code)
            return stockData.stockLevel == null ? "OUTOFSTOCK" : "INSTOCK";
        },
        price: async (product) => {
            const priceObject = await getPriceByProductCode(product.code);            
            return {
                productCode: priceObject.productCode,
                price: priceObject.price,
                currency: priceObject.currency,
            }
        },        
        decription: (product) => product.description,
        wishlist: (product) => product.wishlist == 1,        
    },
    Mutation: {
        updateWishlistStatusForProduct: async (_root, { code, wishlist }) => {            
            return await updateWishlistStatus(code, wishlist);
        },
    },
};
import { getAllStocks, getStockByProductCode, updateStock } from "../restclient/stock-api.js";

export const productStockResolver = {
    Query: {
        getAllStocks: async () => {
            const allStocks = await getAllStocks();
            console.log("productStockResolver : ", allStocks);
            return allStocks;
        },

        getStockByProductCode: async (_root, {productCode}) => {              
            return await getStockByProductCode(productCode);
        },
    },
    ProductStock: {
        forceInStock: (productStock) => productStock.forceInStock == 1,        
    }, 
    Mutation: {
        updateStock: async (_root, {productCode, stockLevel, forceInStock}) => {
            updateStock(productCode, stockLevel, forceInStock); 
            return await getStockByProductCode(productCode);           
        },
    },   
    
};
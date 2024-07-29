import {
    getProduct,
    getProductsByCategory,getCategory

} from '../database/datasource.js'

export const category2ProductResolver = {
    Query: {
        productsByCategory: async (_root, {categoryCode}) => { 
            const testList = new Array(); 
            const cat2Products  = await getProductsByCategory(categoryCode);
            const categoryProducts = cat2Products.map(async function(entry) {
                const productEntry = await getProduct(entry.productCode); 
                testList.push(productEntry);               
                console.log("Pushed Product : ", productEntry);
            }); 
            console.log("Test List : ", testList);
            return testList;
        },
        Category2Product: async (Category2Product) => {
            const cat2Products  = await getProductsByCategory("34c3e675-7d7f-4ccd-bc6e-4086913ff3e8");
            console.log(cat2Products);
            return cat2Products;
        },        
    },
    Category: {
        active: async (category) => category.active == 1,
        parentCategory: async(category) => {
            return await getCategory(category.code);                        
        },
    },    
};
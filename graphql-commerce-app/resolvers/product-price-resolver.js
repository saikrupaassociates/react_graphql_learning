import {getPriceByProductCode } from "../restclient/price-api.js";

export const productPriceResolver = {
    Query: {
        getPriceByProductCode: async (_root, {productCode}) => {  
            // console.log("productPriceResolver : Product Code : ", productCode);          
            const price = await getPriceByProductCode(productCode);            
            return price;
        },
    },
    // ProductPrice : {
    //     currency : (product) => {
    //         const priceObj = productPrice.currency;            
    //         console.log("priceObj : ", priceObj);
    //         return "INR";
    //     },
    // },
    // Price: {
    //     currency: () => {"INR"},        
    // },    
};

function resolveCurrency(props) {
    console.log("props : ", props);
}
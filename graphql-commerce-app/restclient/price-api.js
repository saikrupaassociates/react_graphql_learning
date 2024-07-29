const PRICE_API = {	
	GET_PRICE_BY_PRODUCT_CODE: "http://localhost:49090/price-service/productcode/",
}
export async function getPriceByProductCode(productCode) {
    const response = await fetch(PRICE_API.GET_PRICE_BY_PRODUCT_CODE+productCode).then(response => response.json());
    // console.log("Price API Layer :: ", response);
    return response;    
}



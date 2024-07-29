const STOCK_API = {
	GET_ALL_STOCKS: "http://localhost:39090/stock-service/allstocks", 
	GET_STOCK_BY_PRODUCT_CODE: "http://localhost:39090/stock-service/productcode/",
    POST_UPDATE_STOCK: "http://localhost:39090/stock-service/updatestock",
}

export async function getAllStocks() {
    const response = await fetch(STOCK_API.GET_ALL_STOCKS).then(response => response.json());
    return response;    
}

export async function getStockByProductCode(productCode) {
    const response = await fetch(STOCK_API.GET_STOCK_BY_PRODUCT_CODE+productCode).then(response => response.json());
    return response;    
}

export async function updateStock(productCode, stockLevel, forceInStock) { 
    const response = await fetch(STOCK_API.POST_UPDATE_STOCK,
        {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(buildObject(productCode, stockLevel, forceInStock)),
        }
    );            
    return response.json;    
}

function buildObject(productCode, stockLevel, forceInStock) {
    const data =  {
        "productCode": productCode,
        "stockLevel": stockLevel,
        "forceInStock": forceInStock
    };
    console.log(data);
    return data;
}


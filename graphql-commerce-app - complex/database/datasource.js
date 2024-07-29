import {mysqlDBConnection as con} from './connection-mysql.js'

const productTable = (Product) => con.table('product_tab');
const categoryTable = (Category) => con.table('category_tab');
const category2categoryTable = (Category) => con.table('category2category_tab');
const category2productTable = (Category) => con.table('category2product_tab');

export async function getProducts() {
    return await productTable().select().where({active: 1});    

}

export async function getCategories() {
    return await categoryTable().select().where({active: 1});        
}    

export async function getRootCategories() {
    return await categoryTable().select().where({parentId: null}).andWhere({active: 1});
}

export async function getCategory(code) {    
    const category = await categoryTable().first().where({code}).andWhere({active: 1});      
    return category;
}

export async function getProduct(code) {
    const product = await productTable().first().where({code}).andWhere({active: 1});
    return product;
}

export async function createCategory({generatedCode, name, categoryUrl, active, parentCategoryCode}) {
    const activeValue = (active == true ? 1: 0);
    const newCategory = {
        code: generatedCode,
        name, 
        categoryUrl: categoryUrl, 
        active: activeValue,
        parentId: parentCategoryCode,
    };
    await categoryTable().upsert(newCategory);
    return await getCategory(generatedCode);
}

export async function getProductsByCategory(categoryCode) {
    const category2products = await category2productTable().select().where({categoryCode: categoryCode});
    // console.log("getProductsByCategory products:", products);
    return category2products;
}

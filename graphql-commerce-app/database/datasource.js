import {mysqlDBConnection as con} from './connection-mysql.js'

const productTable = (Product) => con.table('product_tab');
const categoryTable = (Category) => con.table('category_tab');

export async function getProducts() {
    return await productTable().select().where({active: 1});    

}

export async function getCategories() {
    const rootCategories = await categoryTable().select().where({active: 1});
    // console.log("At datasource Layer :: rootCategories : ", rootCategories);
    return rootCategories;
}    

export async function getRootCategories() {
    return await categoryTable().select().where({parentId: ""}).andWhere({active: 1});
}

export async function getSubCategories(code) {
    return await categoryTable().select().where({parentId: code}).andWhere({active: 1});
}

export async function getCategory(code) {    
    const category = await categoryTable().first().where({code}).andWhere({active: 1});      
    return category;
}

export async function getCategoryByUrl(categoryUrl) {    
    const category = await categoryTable().first().where({categoryUrl}).andWhere({active: 1});
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

export async function updateWishlistStatus(code, wishlist) {
    await productTable().update({ wishlist }).where({ code });
    return await getProduct(code);
  }

export async function getProductsByCategoryCode(categoryCode) {
    const ska = await con('product_tab as ptab')
    .join('category2product_tab as cptab', 'cptab.productCode', 'ptab.code')
    .where({categoryCode : categoryCode});
    // console.log("ska : ", ska);
    return ska;
}

export async function getSuperCategories(productCode) {
    const ska = await con('category_tab as ctab')
    .join('category2product_tab as cptab', 'cptab.categoryCode', 'ctab.code')
    .where({productCode : productCode});    
    return ska;
}












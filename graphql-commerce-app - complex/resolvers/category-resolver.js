import {getRootCategories, getCategories, getCategory, createCategory} from '../database/datasource.js'
export const categoryResolver = {
    Query: {
        category: async (_root, {code}) => {            
            return await getCategory(code);
        },

        categories: async() => {
            const dbCategories = await getCategories();            
            return dbCategories;
        },

        rootCategories: async() => {
            const dbCategories = await getRootCategories();              
            return dbCategories;
        },
    },

    Category: {
        active: async (category) => category.active == 1,
        parentCategory: async(category) => {
            const parentCategory = await getCategory(category.parentId);            
            return parentCategory;
        },

    },
    Mutation: {
        createCategory: async (_root, {name, categoryUrl, active, parentCategoryCode}) => {
            const generatedCode = crypto.randomUUID();            
            return await createCategory({generatedCode, name, categoryUrl, active, parentCategoryCode});            
        },
    },
};
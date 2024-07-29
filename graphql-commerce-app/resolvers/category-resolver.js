import {getRootCategories, getCategories, getCategory, createCategory, getSubCategories} from '../database/datasource.js'
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
            const rootCategories = await getRootCategories();             
            // console.log("At Category Resolver : Root Categories : ", rootCategories);
            return rootCategories;
        },
        childCategories: async(_root, {code}) => {
            const subCategories = await getSubCategories(code);
            // console.log("categoryResolver :: returning Sub Categories : \n", subCategories);
            return subCategories;
        },
    },

    Category: {
        active: async (category) => category.active == 1,
        parentCategory: async(category) => {
            const parentCategory = await getCategory(category.parentId);            
            return parentCategory;
        },
        imageUrl: (category) => category.imageUrl,

    },
    Mutation: {
        createCategory: async (_root, {name, categoryUrl, active, parentCategoryCode}) => {
            const generatedCode = crypto.randomUUID();           
            return await createCategory({generatedCode, name, categoryUrl, active, parentCategoryCode});            
        },
    },
};
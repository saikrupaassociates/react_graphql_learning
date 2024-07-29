import { getCatagories,getCategory,createCategory ,updateCategory,deleteCategory} from './db/category.js'

export const resolvers1 = {
    Query: {
   /*  categories: async () => {
     const categories =await getCatagories();
     return categories; */
     categories: () => getCatagories(),
     category: (_root, { id }  ) => getCategory(id),
  },

  Mutation: {
    createCategory: (_root, {name,parentId}) => { 
        return createCategory({name,parentId});
    },
    updateCategory: (_root, {id,name,parentId}) => {

      return updateCategory({id,name,parentId});
  },

  deleteCategory: (_root, { id }) => deleteCategory(id),
  
  },

};

import { connection } from './connection.js';
import { generateId } from './ids.js';

const getCategoryTable = () => connection.table('category');


export async function getCatagories() {
    return await getCategoryTable().select();
  }

  export async function getCategory(id) {
    return await getCategoryTable().first().where({ id });
  }


  export async function createCategory({name,parentId,image,description}){

    const category = {
        id:generateId(),
        name,
        parentId,
        image,
        description,
    };
  
    await getCategoryTable().insert(category);
    return category;
    
  }

  export async function updateCategory({ id, name, parentId,image,description }) {
    const category = await getCategoryTable().first().where({ id });
    if (!category) {
      throw new Error(`category not found: ${id}`);
    }
    const updatedFields = { name,parentId,image,description};
    await getCategoryTable().update(updatedFields).where({ id });
    return { ...category, ...updatedFields };
  }


  export async function deleteCategory(id) {
    const category = await getCategoryTable().first().where({ id });
    if (!category) {
      throw new Error(`category not found: ${id}`);
    }
    await getCategoryTable().delete().where({ id });
    return category;
  }
  
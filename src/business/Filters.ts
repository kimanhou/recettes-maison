import Recipe from "../model/Recipe";
import Category from "../model/Category";


class Filters {
    getRecipes = (categories : Category[]) => {
        const allRecipes = Recipe.getAllSortedRecipes();

        if (categories.includes(Category.ALL)) {
            return allRecipes;
        }
        
        return allRecipes.filter(t => Category.intersects([t.category], categories));
    }
}

export default new Filters();
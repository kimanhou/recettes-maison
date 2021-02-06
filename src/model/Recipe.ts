
import RecipeOne from "../view/components/Recipes/1/RecipeOne";
import RecipeTwo from "../view/components/Recipes/2/RecipeTwo";
import RecipeThree from "../view/components/Recipes/3/RecipeThree";
import Category from "./Category";

export interface IRecipeContentProps{
    titleTopLayerRef: React.RefObject<HTMLDivElement>;
    titleBottomLayerRef: React.RefObject<HTMLDivElement>;
    title : string;
}

export default class Recipe {
    readonly id : number;
    readonly date : Date;
    readonly title : string;
    readonly content : React.FC;
    readonly category : Category;

    constructor(id : number, date : Date, title : string, content : React.FC, category : Category) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.content = content;
        this.category = category
    }

    static getAllSortedRecipes = () => {
        return Recipe.getAllRecipes().sort((a, b) => b.date.getTime() - a.date.getTime());
    }

    static getAllRecipes = () => {
        return [ 
            Recipe.ONE,
            Recipe.TWO,
            Recipe.THREE,
            // Recipe.TWO,
            // Recipe.ONE,
            // Recipe.THREE,
            // Recipe.ONE,
            // Recipe.THREE,
            // Recipe.THREE,
            // Recipe.ONE,
         ];
    }

    static getLatestRecipes = (numberOfRecipes : number) => {
        const all = Recipe.getAllSortedRecipes();
        return all.slice(0, numberOfRecipes);
    }

    static getRecipeById = (id : number) => {
        const recipes = Recipe.getAllRecipes();
        const recipe = recipes.find(t => t.id === id);
        if (recipe !== undefined) {
            return recipe;
        }
        throw new Error(`GetRecipeById error : Recipe with id ${id} not found.`); 
    }

    getDateFormat = () => {
        var mm = months[this.date.getMonth()];
        var dd = this.date.getDate();
        
        return [(dd>9 ? '' : '0') + dd, mm, this.date.getFullYear()].join(' ');
    }

    getTitle = () => {
        return this.title;
    }

    getCategory = () => {
        return this.category;
    }

    static getNextRecipe = (id : number) => {
        const allRecipes = Recipe.getAllSortedRecipes();
        const myIndex = allRecipes.findIndex(t => t.id === id);
        if (myIndex === 0) {
            return undefined;
        }
        return allRecipes[myIndex - 1];
    }

    static getPreviousRecipe = (id : number) => {
        const allRecipes = Recipe.getAllSortedRecipes();
        const myIndex = allRecipes.findIndex(t => t.id === id);
        if (myIndex === allRecipes.length - 1) {
            return undefined;
        }
        return allRecipes[myIndex + 1];
    }


    static ONE = new Recipe(1, new Date('2021-02-03'), 'Savon solide', RecipeOne, Category.HYGIENE);
    static TWO = new Recipe(2, new Date('2021-02-10'), 'Baume à lèvres', RecipeTwo, Category.HYGIENE);
    static THREE = new Recipe(3, new Date('2021-02-17'), 'Lessive', RecipeThree, Category.CLEANING);
}

const months = [ 'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc' ];

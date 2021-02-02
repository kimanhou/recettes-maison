import React from 'react';
import { useParams } from 'react-router';
import Recipe from '../../../model/Recipe';

const RecipeRoot : React.FC = props => {
    let { recipeId } = useParams<{recipeId ?: string}>();
    var foundrecipe = Recipe.getAllRecipes().find(t => t.id.toString() === recipeId);
    const recipe = foundrecipe == undefined ? Recipe.ONE : foundrecipe;

    return(
        <recipe.content/>
    );
}

export default RecipeRoot;
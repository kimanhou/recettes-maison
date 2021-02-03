import React from 'react';
import Recipe from '../../../../model/Recipe';
import RecipeHeader from './RecipeHeader/RecipeHeader';
import './RecipeTemplate.scss';

interface IRecipeTemplateProps {
    recipeId : number;
}

const RecipeTemplate : React.FC<IRecipeTemplateProps> = props => {
    const recipe = Recipe.getRecipeById(props.recipeId);

    return (
        <div className={`recipe-template`}>
            <RecipeHeader title={recipe.getTitle()} />
            {props.children}
        </div>
    );
}

export default RecipeTemplate;
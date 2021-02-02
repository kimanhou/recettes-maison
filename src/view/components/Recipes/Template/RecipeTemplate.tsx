import React from 'react';
import Recipe from '../../../../model/Recipe';
import './RecipeTemplate.scss';

interface IRecipeTemplateProps {
    recipeId : number;
}

const RecipeTemplate : React.FC<IRecipeTemplateProps> = props => {
    const recipe = Recipe.getRecipeById(props.recipeId);

    return (
        <div className={`recipe-template`}>
            <div className={`recipe-title`}>
                {recipe.title}
            </div>
            {props.children}
        </div>
    );
}

export default RecipeTemplate;
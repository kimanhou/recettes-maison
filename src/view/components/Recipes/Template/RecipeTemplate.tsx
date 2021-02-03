import React from 'react';
import Recipe from '../../../../model/Recipe';
import ArrowBack from './ArrowBack/ArrowBack';
import ArrowUp from './ArrowUp/ArrowUp';
import RecipeHeader from './RecipeHeader/RecipeHeader';
import './RecipeTemplate.scss';

interface IRecipeTemplateProps {
    recipeId : number;
    classname : string;
}

const RecipeTemplate : React.FC<IRecipeTemplateProps> = props => {
    const recipe = Recipe.getRecipeById(props.recipeId);

    return (
        <div className={`recipe-template ${props.classname}`}>
            <RecipeHeader title={recipe.getTitle()} />
            <div className={`main-wrapper`} id={`top`}>
                <ArrowBack />
                {props.children}
                <ArrowUp />
            </div>
        </div>
    );
}

export default RecipeTemplate;
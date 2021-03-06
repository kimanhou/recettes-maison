import React from 'react';
import Recipe from '../../../../model/Recipe';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
import ArrowBack from './ArrowBack/ArrowBack';
import ArrowUp from './ArrowUp/ArrowUp';
import RecipeHeader from './RecipeHeader/RecipeHeader';
import './RecipeTemplate.scss';

interface IRecipeTemplateProps {
    recipeId : number;
    classname : string;
}

// --color-white: rgb(251, 251, 251);
// --color-charcoal: rgb(54, 63, 73);
const calculateValueOfBackgroundColor = (from : number, to : number, distance : number, distanceTotale : number) => {
    return Math.floor(from + (to - from) * (distance / distanceTotale));
}

export const getBackgroundColor = (distance : number, distanceTotale : number) => {
    return `rgb(${calculateValueOfBackgroundColor(54, 251, distance, distanceTotale)}, ${calculateValueOfBackgroundColor(63, 251, distance, distanceTotale)}, ${calculateValueOfBackgroundColor(73, 251, distance, distanceTotale)})`;
}

const RecipeTemplate : React.FC<IRecipeTemplateProps> = props => {
    const recipe = Recipe.getRecipeById(props.recipeId);

    return (
        <div className={`recipe-template ${props.classname}`}>
            <RecipeHeader title={recipe.getTitle()} />
            <Navigation  selectedPage='recipes' />
            <div className={`main-wrapper`} id={`top`}>
                <ArrowBack />
                {props.children}
                <ArrowUp />
            </div>
            <Footer />
        </div>
    );
}

export default RecipeTemplate;
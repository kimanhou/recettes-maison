import React from 'react';
import { Link } from 'react-router-dom';
import Recipe from '../../../model/Recipe';
import './RecipePreview.scss';

interface IRecipePreviewProps {
    recipe : Recipe;
    backgroundColor : string;
}

const RecipePreview : React.FC<IRecipePreviewProps> = props => {
    const image = require(`../Recipes/${props.recipe.id}/images/hero-image.jpg`).default;

    return (
        <Link className={`recipe-preview`} to={`recipes/${props.recipe.id}`}>
            <div className={`image`}>
                <div className={`hover-shadow`}></div>
                <div className={`read-more`}>
                    Voir la recette
                </div>
                <img src={image} alt={props.recipe.title}/>
            </div>
            <div className={`text ${props.backgroundColor}`}>
                <div className={`title`}>
                    {props.recipe.getTitle()}
                </div>
            </div>
        </Link>
    );
}

export default RecipePreview;
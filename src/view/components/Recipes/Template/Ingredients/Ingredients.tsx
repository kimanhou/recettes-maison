import React from 'react';
import Ingredient from '../../../../../model/Ingredient';
import RecipeSectionTitle from '../RecipeSectionTitle/RecipeSectionTitle';
import './Ingredients.scss';

interface IIngredientsProps {
    ingredients : Ingredient[];
}

const Ingredients : React.FC<IIngredientsProps> = props => {
    const ingredientQuantities = props.ingredients.map(t => t.quantity);
    const ingredientNames = props.ingredients.map(t => t.ingredientName);

    return (
        <div className={`column ingredients-container`}>
            <RecipeSectionTitle title='Les ingrédients' />
            <div className={`ingredients`}>
                <div className={`ingredients-column`}>
                    {ingredientQuantities.map(t => <>{t}<br></br></>)}
                </div>
                <div className={`ingredients-column`}>
                    {ingredientNames.map(t => <>{t}<br></br></>)}
                </div>
            </div>
        </div>
    );
}

export default Ingredients;
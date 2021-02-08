import React from 'react';
import './RecipeHeader.scss';

interface IRecipeHeaderProps {
    title : string;
}

const RecipeHeader : React.FC<IRecipeHeaderProps> = props => {
    return (
        <div className={`recipe-header`}>
            {props.title}
        </div>
    );
}

export default RecipeHeader;
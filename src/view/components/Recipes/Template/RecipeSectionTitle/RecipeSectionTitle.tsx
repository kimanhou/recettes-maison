import React from 'react';
import './RecipeSectionTitle.scss';

interface IRecipeSectionTitleProps {
    title : string;
}

const RecipeSectionTitle : React.FC<IRecipeSectionTitleProps> = props => {
    return (
        <div className={`recipe-section-title`}>
            {props.title}
        </div>
    );
}

export default RecipeSectionTitle;
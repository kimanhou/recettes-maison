import React, { useEffect, useState } from 'react';
import './RecipeImage.scss';

interface IRecipeImageProps {
    imageUrl : string;
    title : string;
    text : string;
}

const RecipeImage : React.FC<IRecipeImageProps> = props => {

    return (
        <div className={`recipe-image`} style={{ backgroundImage: `url('${props.imageUrl}')` }}>
                <div className={`hover-shadow`}></div>
                <div className={`recipe-image-content`}>
                    <div className={`recipe-image-title`}>
                        {props.title}
                    </div>
                    <div className={`recipe-image-text`}>
                        {props.text}
                    </div>
                </div>
        </div>
    );
}

export default RecipeImage;
import React, { useState } from 'react';
import ScreenDetector from '../../../ScreenDetector/screenDetector';
import './RecipeHighlight.scss';

interface IRecipeHighlightProps {
}

const RecipeHighlight : React.FC<IRecipeHighlightProps> = props => {
    const [active, setActive] = useState(false);
    const activeClassname = active ? 'active' : '';
    const onActive = () => {
        setActive(true);
    }

    const onUnactive = () => {
        setActive(false);
    }
    
    return (
        <div className={`recipe-highlight ${activeClassname}`}>
            <ScreenDetector className={`screen-detector-recipe-highlight`} onActive={onActive} onUnactive={onUnactive} />
            <div className={`recipe-highlight-background`}></div>
            <div className={`recipe-hightlight-content`}>
                {props.children}
            </div>
        </div>
    );
}

export default RecipeHighlight;
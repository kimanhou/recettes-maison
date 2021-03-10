import React from 'react';
import ScreenDetector from '../../../ScreenDetector/screenDetector';
import ListItem from '../ListItem/ListItem';
import RecipeSectionTitle from '../RecipeSectionTitle/RecipeSectionTitle';
import { getBackgroundColor } from '../RecipeTemplate';
import './Ustensils.scss';

interface IUstensilsProps {
    ustensils : string[];
    materielActive : boolean;
    materielOnActive : () => void;
    materielOnUnactive : () => void;
}

const Ustensils : React.FC<IUstensilsProps> = props => {
    const totalLength = props.ustensils.length;
    return (
        <div className={`column ustensils`}>
            <RecipeSectionTitle title='Le matériel' />
            <ScreenDetector className={`screen-detector-materiel`} onActive={props.materielOnActive} onUnactive={props.materielOnUnactive} />
            {props.ustensils.map((t, index) => <ListItem text={t} dotColor={getBackgroundColor(index, totalLength - 1)} active={props.materielActive}/>)}
        </div>
    );
}

export default Ustensils;
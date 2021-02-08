import React from 'react';
import { myScrollTo } from '../../../../../Util';
import './ArrowUp.scss';

const ArrowUp : React.FC = props => {
    const onClickTop = () => {
        myScrollTo('top');
    }
    
    return(
        <div onClick={onClickTop} className={`arrow-up`}>
            <span>Retour en haut</span>
            <span className={`arrow-up`}>⌃</span>
        </div>
    );
}

export default ArrowUp;
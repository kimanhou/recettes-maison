import React from 'react';
import './Footer.scss';

interface IFooterProps {
}

const Footer : React.FC<IFooterProps> = props => {

    return(
        <div className={`footer`}>
            <span className={`recettes`}>Recettes maison </span>
            <span className={`by-maki`}>by Maki</span> 
            <span className={`year`}> | 2021 &copy;</span>
        </div>
    )
}

export default Footer;
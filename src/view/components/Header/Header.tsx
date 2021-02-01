import React from 'react';
import './Header.scss';

interface IHeaderProps {}

const Header : React.FC<IHeaderProps> = props => {
    return (
        <div className={`header`}>
            <div className={`header-recipes`}>Recettes maison</div>
            <div className={`header-by-maki`}>by Maki</div>
        </div>
    );
}

export default Header;
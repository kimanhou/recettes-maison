import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

interface IHeaderProps {}

const Header : React.FC<IHeaderProps> = props => {
    return (
        <Link className={`header`} to={'/'}>
            <div className={`header-content`}>
                <div className={`header-recipes`}>Recettes maison</div>
                <div className={`header-by-maki`}>by Maki</div>
            </div>
        </Link>
    );
}

export default Header;
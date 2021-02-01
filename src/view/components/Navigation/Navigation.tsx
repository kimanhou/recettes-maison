import React from 'react';
import Text from '../../../model/Text';
import './Navigation.scss';
import NavigationLink from './NavigationLink';

interface INavigationProps {}

const Navigation : React.FC<INavigationProps> = props => {
    return (
        <div className={`navigation`}>
            <NavigationLink text={new Text('Recipes', 'Les recettes')} to='/recipes?categories=["all"]' linkIndex={0} backgroundColor={`var(--color-apricot)`}/>
            <NavigationLink text={new Text('About', 'À propos')} to='/about' linkIndex={1} backgroundColor={`var(--color-light-grey)`}/>
            <NavigationLink text={new Text('Contact', 'Contact')} to='/contact' linkIndex={2} backgroundColor={`var(--color-grey)`}/>
        </div>
    );
}

export default Navigation;
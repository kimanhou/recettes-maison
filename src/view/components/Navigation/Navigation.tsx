import React from 'react';
import './Navigation.scss';
import NavigationLink from './NavigationLink';

interface INavigationProps {
    selectedPage : string;
}

const Navigation : React.FC<INavigationProps> = props => {
    const isRecipesSelected = props.selectedPage === 'recipes';
    const isAboutSelected = props.selectedPage === 'about';
    const isContactSelected = props.selectedPage === 'contact';

    return (
        <div className={`navigation`}>
            <NavigationLink  text='Les recettes' to='/recipes?categories=["all"]' linkIndex={0} backgroundColor={`var(--color-apricot)`} isSelected={isRecipesSelected} />
            <NavigationLink text='À propos' to='/about' linkIndex={1} backgroundColor={`var(--color-light-grey)`} isSelected={isAboutSelected} />
            <NavigationLink text='Contact' to='/contact' linkIndex={2} backgroundColor={`var(--color-grey)`} isSelected={isContactSelected} />
        </div>
    );
}

export default Navigation;
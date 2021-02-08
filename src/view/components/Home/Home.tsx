import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './Home.scss';

const Home : React.FC = props => {
    return (
        <div className={`home`}>
            <Header />
            <Navigation selectedPage='' />
        </div>
    );
}

export default Home;
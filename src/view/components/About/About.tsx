import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './About.scss';

const About : React.FC = props => {
    return (
        <div className={`about`}>
            <Header />
            <Navigation  selectedPage='about' />
            <div className={`main-wrapper`}>
                <div className={`about-title`}>
                    À propos
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
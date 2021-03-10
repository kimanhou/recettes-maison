import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './Contact.scss';

const Contact : React.FC = props => {
    return (
        <div className={`contact`}>
            <Header />
            <Navigation  selectedPage='contact' />
            <div className={`main-wrapper`}>
                <div className={`contact-title`}>
                    Contact
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
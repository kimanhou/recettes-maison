import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ScreenDetector from '../ScreenDetector/screenDetector';
import './NavigationLink.scss';

interface INavigationLinkProps {
    text : string;
    to : string;
    linkIndex : number;
    isSelected : boolean;
    backgroundColor ?: string;
}

const NavigationLink : React.FC<INavigationLinkProps> = props => {
    const formatText = (text : string) => {
        return text.split('').map((t, index) => {
            const delay = index * 0.1 + 1 + props.linkIndex ;
            return <span className={`down ${index}`} >
                        {t}
                        <span className={`moving`} style={{ animationDelay: `${delay}s` }} >{t}</span>
                    </span>
        })
    }

    const ref = useRef<HTMLDivElement>(null);
    const setAnimation = () => {
        if(ref.current != null && !ref.current.classList.contains("animate")){
            ref.current.classList.add("animate");
        }
    }

    const backgroundColor = props.backgroundColor !== undefined ? props.backgroundColor : 'var(--color-charcoal)';

    const isSelectedClassname = props.isSelected ? 'is-selected' : '';

    return (
        <Link className={`navigation-link ${isSelectedClassname}`} to={props.to} >
            <div className={`navigation-link-div`} ref={ref}>
                {formatText(props.text)}
                <ScreenDetector className={`screen-detector-navigation-link`} onActive={setAnimation} />
            </div>
            <div className={`navigation-link-underline`}>
                <div className={`navigation-link-underline-half left`} style={{ backgroundColor: backgroundColor }}></div>
                <div className={`navigation-link-underline-half right`} style={{ backgroundColor: backgroundColor }}></div>
            </div>
        </Link>
    );
}

export default NavigationLink;
import React from 'react';
import Category from '../../../model/Category';
import './CategoryButton.scss';

interface ICategoryButtonProps {
    category : Category;
    isSelected : boolean;
    onClick : () => void;
}

const CategoryButton : React.FC<ICategoryButtonProps> = props => {
    const isSelectedClassName = props.isSelected ? 'is-selected' : '';

    const getBackgroundColorClassname = () => {
        if (props.category.equals(Category.HYGIENE)) {
            return 'apricot';
        }
        else if (props.category.equals(Category.CLEANING)) {
            return 'light-grey';
        }
        else if (props.category.equals(Category.ALL)) {
            return 'charcoal';
        }
        else {
            return 'grey';
        }
    }

    return (
        <div className={`category-button ${isSelectedClassName} ${getBackgroundColorClassname()}`} onClick={props.onClick}>
            <div className="background-33OWHL5 abs-fill">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 168" width="550" height="168" preserveAspectRatio="none" style={{width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)'}}>
                    <defs>
                        <clipPath id="__lottie_element_858">
                            <rect width="550" height="168" x="0" y="0"></rect>
                        </clipPath>
                    </defs>
                    <g clip-path="url(#__lottie_element_858)">
                        <g transform="matrix(1,0,0,1,282.3869934082031,971)" opacity="1" style={{display: 'none'}}>
                            <g opacity="1" transform="matrix(1,0,0,1,101.5,-86)">
                                <path fill="rgb(31,119,249)" fill-opacity="1" 
                                    d=" M-104.23100280761719,-907.9630126953125 C176.1179962158203,-906.989013671875 204.63999938964844,-939.1519775390625 188.71800231933594,-796.197021484375 C177.11300659179688,-692 232.1230010986328,-688.2630004882812 -103.10299682617188,-688.6510009765625 C-404.88800048828125,-689 -402.3139953613281,-676.9869995117188 -402.11700439453125,-795.4240112304688 C-401.8869934082031,-934 -402.8869934082031,-909 -104.23100280761719,-907.9630126953125z">
                                </path>
                            </g>
                        </g>
                        <g style={{display: 'block'}} transform="matrix(1,0,0,1,275,84)" opacity="1">
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                <path fill-opacity="1" className={`path`}
                                    d=" M-62.22859573364258,-76.2843017578125 C-114.54045867919922,-77.16676330566406 -163.30902099609375,-78.31365966796875 -203.5754852294922,-59.62897872924805 C-237.87294006347656,-43.755889892578125 -254.96075439453125,4.897095680236816 -221.2318878173828,45.10591506958008 C-198.3268585205078,81.15975189208984 -126.51339721679688,76.2843017578125 -63.31096267700195,76.57160949707031 C-0.4116179943084717,77.794189453125 29.542190551757812,71.03105926513672 88.46839904785156,73.34166717529297 C157.7086181640625,76.06149291992188 200.7889404296875,85.85816192626953 227.75930786132812,47.7631721496582 C249.5533905029297,17.03590965270996 250.461181640625,-15.121354103088379 235.02935791015625,-39.66957092285156 C208.59107971191406,-81.49311828613281 131.11386108398438,-62.24323654174805 78.83177947998047,-68.90397644042969 C16.38657569885254,-76.78626251220703 -11.726871490478516,-75.42839050292969 -62.22859573364258,-76.2843017578125z">
                                </path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div> 
            <span className="category-button-description">{props.category.getDescription()}</span>
        </div>
    );
}

export default CategoryButton;
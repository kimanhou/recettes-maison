import React from 'react';
import './RecipeSectionTitle.scss';

interface IRecipeSectionTitleProps {
    title : string;
}

const RecipeSectionTitle : React.FC<IRecipeSectionTitleProps> = props => {
    return (
        <div className={`recipe-section-title`}>
            <div className="abs-fill">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 168" width="550" height="168" preserveAspectRatio="none" style={{width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)'}}>
                    <defs>
                        <clipPath id="__lottie_element_858">
                            <rect width="550" height="168" x="0" y="0"></rect>
                        </clipPath>
                    </defs>
                    <g clip-path="url(#__lottie_element_858)">
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
            <span className="recipe-section-title-text">{props.title}</span>
        </div>
    );
}

export default RecipeSectionTitle;
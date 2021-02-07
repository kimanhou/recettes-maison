import React, { useState } from 'react';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import ListItem from '../Template/ListItem/ListItem';
import RecipeImage from '../Template/RecipeImage/RecipeImage';
import RecipeSectionTitle from '../Template/RecipeSectionTitle/RecipeSectionTitle';
import RecipeTemplate, { getBackgroundColor } from '../Template/RecipeTemplate';
import './RecipeFour.scss';


const RecipeFour : React.FC = props => {
    const image = require(`./images/1.jpg`).default;

    const [materielActive, setMaterielActive] = useState(false);
    const materielOnActive = () => {
        setMaterielActive(true);
    }

    const materielOnUnactive = () => {
        setMaterielActive(false);
    }

    return (
        <RecipeTemplate recipeId={4} classname={`four`}>
            {/* <RecipeSectionTitle title='En résumé' /> */}
            
            
            {/* <div className={`section-separator`}></div> */}
            
            <div className={`two-columns`}>
                <div className={`column`}>
                    <RecipeSectionTitle title='Les ingrédients' />
                    <div className={`ingredients`}>
                        <div className={`ingredients-column`}>
                            100g<br></br>
                            8 pincées<br></br>
                            5g
                        </div>
                        <div className={`ingredients-column`}>
                            Cacahuètes grillées non salées 🥜<br></br>
                            Sel<br></br>
                            Sucre
                        </div>
                    </div>
                </div>
                <div className={`column`}>
                    <RecipeSectionTitle title='Le matériel' />
                    <ScreenDetector className={`screen-detector-materiel`} onActive={materielOnActive} onUnactive={materielOnUnactive} />
                    <ListItem text={`Un mixeur`} dotColor={getBackgroundColor(1, 5)} active={materielActive}/>
                    <ListItem text={`Un bocal`} dotColor={getBackgroundColor(2, 5)} active={materielActive}/>
                    <ListItem text={`Un four si les cacahuètes sont crues`} dotColor={getBackgroundColor(3, 5)} active={materielActive}/>
                </div>
            </div>
            
            <div className={`section-separator`}></div>
            
            <RecipeSectionTitle title='La procédure' />
            <div className={`step-title`}>1. La cuisson</div>
            Si les cacahuètes sont crues, les griller en les mettant au four 15 min à 180°. Les retourner toutes les 5 min.<br></br>
            Bien laisser refroidir avant de passer à la suite. 
            <div className={`step-separator`}></div>
            <div className={`step-title`}>2. Le mixage</div>
            Mixer pendant environ 10 min, jusqu'à ce que l'huile des cacahuètes ressorte.<br></br>
            <div className={`step-separator`}></div>
            <div className={`step-title`}>3. Le bonus crispy (optionnel)</div>
            Mixer légèrement quelques cacahuètes et les rajouter au mélange.
            <div className={`step-separator`}></div>
            <div className={`step-title`}>4. La mise en pot</div>
            Mettre le tout dans un bocal.

            <div className={`section-separator`}></div>

            <RecipeSectionTitle title='Les coûts' />
            Cacahuètes 3,55€ / kg chez Tang Frères

            <div className={`section-separator`}></div>

            <div className={`flex-column`}>
                <RecipeImage imageUrl={image} title={`Mon pot de beurre de cacahuètes`} text={`home made`} />
            </div>
        </RecipeTemplate>
    );
}

export default RecipeFour;
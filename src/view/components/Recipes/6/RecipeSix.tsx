import React, { useState } from 'react';
import Ingredient from '../../../../model/Ingredient';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import Ingredients from '../Template/Ingredients/Ingredients';
import ListItem from '../Template/ListItem/ListItem';
import RecipeHighlight from '../Template/RecipeHighlight/RecipeHighlight';
import RecipeImage from '../Template/RecipeImage/RecipeImage';
import RecipeSectionTitle from '../Template/RecipeSectionTitle/RecipeSectionTitle';
import RecipeTemplate, { getBackgroundColor } from '../Template/RecipeTemplate';
import './RecipeSix.scss';


const RecipeSix : React.FC = props => {
    const image = require(`./images/hero-image.jpg`).default;

    const [materielActive, setMaterielActive] = useState(false);
    const materielOnActive = () => {
        setMaterielActive(true);
    }

    const materielOnUnactive = () => {
        setMaterielActive(false);
    }

    const ingredients : Ingredient[] = [ 
                                        {quantity: '80g', ingredientName: 'Sucre (pour le caramel)'},
                                        {quantity: '20g', ingredientName: 'Eau (pour le caramel)'},
                                        {quantity: '125g', ingredientName: 'Noix de pécan'},
                                        {quantity: '120g', ingredientName: 'Beurre'},
                                        {quantity: '60g', ingredientName: 'Chocolat au lait'},
                                        {quantity: '140g', ingredientName: 'Chocolat noir'},
                                        {quantity: '2', ingredientName: 'Œufs'},
                                        {quantity: '100g', ingredientName: 'Sucre'},
                                        {quantity: '40g', ingredientName: 'Farine'},
                                        {quantity: '2 pincées', ingredientName: 'Sel'},
                                        {quantity: '60g', ingredientName: 'Chocolat noir (à rajouter en dernier)'}
                                    ];

    return (
        <RecipeTemplate recipeId={6} classname={`six`}>
            <div className={`two-columns`}>
                <Ingredients ingredients={ingredients}/>
                <div className={`column`}>
                    <RecipeSectionTitle title='Le matériel' />
                    <ScreenDetector className={`screen-detector-materiel`} onActive={materielOnActive} onUnactive={materielOnUnactive} />
                    <ListItem text={`Une spatule`} dotColor={getBackgroundColor(0, 5)} active={materielActive}/>
                    <ListItem text={`Une grande poêle`} dotColor={getBackgroundColor(1, 5)} active={materielActive}/>
                    <ListItem text={`Une petite casserole`} dotColor={getBackgroundColor(2, 5)} active={materielActive}/>
                    <ListItem text={`Un saladier`} dotColor={getBackgroundColor(3, 5)} active={materielActive}/>
                    <ListItem text={`Un moule à brownie`} dotColor={getBackgroundColor(4, 5)} active={materielActive}/>
                    <ListItem text={`Papier sulfurisé`} dotColor={getBackgroundColor(5, 5)} active={materielActive}/>
                </div>
            </div>
            
            <div className={`section-separator`}></div>
            
            <RecipeSectionTitle title='La procédure' />
            <div className={`step-title`}>1. Les noix de pécan caramélisées</div>
            Couper grossièrement les noix.<br></br>
            Faire bouillir l'eau et le sucre dans une grande poêle pour préparer un caramel. 
            Aux premiers signes de coloration, verser les noix de pécan et mélanger pour les enrober. <br></br>
            Réserver. Préchauffer le four à 180 degrés. 
            <div className={`step-separator`}></div>
            <div className={`step-title`}>2. L'appareil à brownie</div>
            Faire fondre le chocolat au lait, le chocolat noir et le beurre au bain-marie.<br></br>
            Dans un saladier, casser les œufs, ajouter le sucre et fouettez légèrement.<br></br>
            Ajouter les chocolats fondus avec le beurre, puis la farine, le sel et mélanger avec une spatule.
            <div className={`step-separator`}></div>
            <div className={`step-title`}>3. Le dressage</div>
            Dans le saladier, incorporer les noix de pécan caramélisées coupées en morceaux et le reste de chocolat noir.<br></br>
            Froisser le papier sulfurisé pour qu'il épouse au mieux la forme du moule.<br></br>
            <div className={`step-separator`}></div>
            <div className={`step-title`}>4. La cuisson</div>
            Enfourner pour <b>25 à 30 min à 180 degrés</b>.

            <div className={`section-separator`}></div>

            <RecipeSectionTitle title='Des liens utiles' />
            <a href='https://www.6play.fr/tous-en-cuisine-avec-cyril-lignac-p_16703/emission-du-16-avril-c_12613219' target='_blank'><RecipeHighlight>Le replay du live de Cyril Lignac sur M6 Replay</RecipeHighlight></a> : il faut un compte M6 Replay et désactiver AdBlocker.
            <br></br><br></br>
            <a href='https://www.cuisineaz.com/recettes/brownie-aux-noix-de-pecan-caramelisees-110286.aspx' target='_blank'>La recette sur <RecipeHighlight>Cuisine AZ</RecipeHighlight></a>
            <br></br><br></br>
            <a href='https://www.instagram.com/p/B_DOjvoIk1t/' target='_blank'>La recette sur <RecipeHighlight>Instagram</RecipeHighlight></a>

            <div className={`section-separator`}></div>

            <div className={`flex-column`}>
                <RecipeImage imageUrl={image} title={`Mon brownie`} text={`aux noix de pécan caramélisées`} />
            </div>

            <div className={`section-separator`}></div>
        </RecipeTemplate>
    );
}

export default RecipeSix;
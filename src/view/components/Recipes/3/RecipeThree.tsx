import React, { useState } from 'react';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import ListItem from '../Template/ListItem/ListItem';
import RecipeHighlight from '../Template/RecipeHighlight/RecipeHighlight';
import RecipeSectionTitle from '../Template/RecipeSectionTitle/RecipeSectionTitle';
import RecipeTemplate, { getBackgroundColor } from '../Template/RecipeTemplate';
import './RecipeThree.scss';


const RecipeThree : React.FC = props => {
    const [materielActive, setMaterielActive] = useState(false);
    const materielOnActive = () => {
        setMaterielActive(true);
    }

    const materielOnUnactive = () => {
        setMaterielActive(false);
    }

    return (
        <RecipeTemplate recipeId={3} classname={`three`}>
            {/* <RecipeSectionTitle title='En résumé' /> */}
            
            
            {/* <div className={`section-separator`}></div> */}
            
            <div className={`two-columns`}>
                <div className={`column`}>
                    <RecipeSectionTitle title='Les ingrédients' />
                    <div className={`ingredients`}>
                        <div className={`ingredients-column`}>
                            20g<br></br>
                            20g<br></br>
                            1L<br></br>
                            1 cuillère à café<br></br>
                            10 gouttes
                        </div>
                        <div className={`ingredients-column`}>
                            Savon de Marseille<br></br>
                            Savon noir liquide<br></br>
                            Eau 💦<br></br>
                            Cristaux de soude<br></br>
                            Huile essentielle (optionnel)
                        </div>
                    </div>
                </div>
                <div className={`column`}>
                    <RecipeSectionTitle title='Le matériel' />
                    <ScreenDetector className={`screen-detector-materiel`} onActive={materielOnActive} onUnactive={materielOnUnactive} />
                    <ListItem text={`Une râpe`} dotColor={getBackgroundColor(1, 5)} active={materielActive}/>
                    <ListItem text={`Une grande casserole`} dotColor={getBackgroundColor(2, 5)} active={materielActive}/>
                    <ListItem text={`Une plaque chauffante`} dotColor={getBackgroundColor(3, 5)} active={materielActive}/>
                    <ListItem text={`Un contenant`} dotColor={getBackgroundColor(4, 5)} active={materielActive}/>
                    <ListItem text={`Un entonnoir (optionnel)`} dotColor={getBackgroundColor(5, 5)} active={materielActive}/>
                </div>
            </div>
            
            <div className={`section-separator`}></div>
            
            <RecipeSectionTitle title='La procédure' />
            <div className={`step-title`}>1. La râpe</div>
            Râper le savon de Marseille en copeaux. 
            <div className={`step-separator`}></div>
            <div className={`step-title`}>2. Le chauffage</div>
            Mélanger tous les ingrédients, sauf l'huile essentielle, et faire chauffer.<br></br>
            Bien mélanger et laisser refroidir.
            <div className={`step-separator`}></div>
            <div className={`step-title`}>3. L'ajout d'huile essentielle (optionnel)</div>
            Ajouter l'huile essentielle.
            <div className={`step-separator`}></div>
            <div className={`step-title`}>4. La mise en pot</div>
            Verser dans le contenant d'un entonnoir si besoin.

            <div className={`section-separator`}></div>

            <RecipeSectionTitle title='Des liens utiles' />
            <a href='https://www.bananapancakes.fr/reconnaitre-un-vrai-savon-de-marseille/' target='_blank'><RecipeHighlight>Banana Pancakes</RecipeHighlight></a> : comment reconnaître un vrai savon de Marseille
            <br></br><br></br>
            <a href='https://www.marius-fabre.com/fr/' target='_blank'><RecipeHighlight>Marius Fabre</RecipeHighlight></a> : fabricant de savon de Marseille

            <div className={`section-separator`}></div>

            <RecipeSectionTitle title='Les coûts' />
            
            <br></br>

            <div className={`section-separator`}></div>
        </RecipeTemplate>
    );
}

export default RecipeThree;
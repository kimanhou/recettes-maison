import React, { useState } from 'react';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import ListItem from '../Template/ListItem/ListItem';
import RecipeHighlight from '../Template/RecipeHighlight/RecipeHighlight';
import RecipeSectionTitle from '../Template/RecipeSectionTitle/RecipeSectionTitle';
import RecipeTemplate, { getBackgroundColor } from '../Template/RecipeTemplate';
import './RecipeTwo.scss';


const RecipeTwo : React.FC = props => {
    const [materielActive, setMaterielActive] = useState(false);
    const materielOnActive = () => {
        setMaterielActive(true);
    }

    const materielOnUnactive = () => {
        setMaterielActive(false);
    }

    return (
        <RecipeTemplate recipeId={2} classname={`two`}>
            <RecipeSectionTitle title='En résumé' />
            Les quantités indiquées correspondent à <RecipeHighlight>10 tubes</RecipeHighlight> de baume à lèvres. <RecipeHighlight>La préparation refroidit et se solidifie vite</RecipeHighlight>, il est donc impératif de garder les contenants à portée de main et de manipuler rapidement.<br></br>
            Pour une meilleure conservation, laisser les tubes au frigo.
            
            <div className={`section-separator`}></div>
            
            <div className={`two-columns`}>
                <div className={`column`}>
                    <RecipeSectionTitle title='Les ingrédients' />
                    <div className={`ingredients`}>
                        <div className={`ingredients-column`}>
                            30mL<br></br>
                            20mL<br></br>
                            14mL<br></br>
                            10mL<br></br>
                            6mL<br></br>
                            8mL<br></br>
                        </div>
                        <div className={`ingredients-column`}>
                            Cire d'abeille &#128029;<br></br>
                            Karité<br></br>
                            Huile de noisette<br></br>
                            Huile de coco &#129381;<br></br>
                            Huile de macadamia<br></br>
                            Huile de ricin<br></br>
                            Huile essentielle
                        </div>
                    </div>
                </div>
                <div className={`column`}>
                    <RecipeSectionTitle title='Le matériel' />
                    <ScreenDetector className={`screen-detector-materiel`} onActive={materielOnActive} onUnactive={materielOnUnactive} />
                    <ListItem text={`Une grande casserole pour le bain-marie`} dotColor={getBackgroundColor(1, 5)} active={materielActive}/>
                    <ListItem text={`Une petite casserole ou un bécher muni d'un bec verseur`} dotColor={getBackgroundColor(2, 5)} active={materielActive}/>
                    <ListItem text={`Une plaque chauffante`} dotColor={getBackgroundColor(3, 5)} active={materielActive}/>
                    <ListItem text={`10 tubes pour baume à lèvres`} dotColor={getBackgroundColor(4, 5)} active={materielActive}/>
                    <ListItem text={`Un entonnoir (optionnel)`} dotColor={getBackgroundColor(5, 5)} active={materielActive}/>
                </div>
            </div>
            
            <div className={`section-separator`}></div>
            
            <RecipeSectionTitle title='La procédure' />
            <div className={`step-title`}>1. Le mélange</div>
            Mélanger tous les ingrédients, sauf l'huile essentielle, dans une petite casserole ou un bécher. 
            <div className={`step-separator`}></div>
            <div className={`step-title`}>2. Le chauffage</div>
            Faire bouillir de l'eau dans une grande casserole et chauffer le mélange au bain-marie.<br></br>
            <div className={`step-separator`}></div>
            <div className={`step-title`}>3. L'ajout d'huile essentielle (optionnel)</div>
            Ajouter quelques gouttes d'huile essentielle.
            <div className={`step-separator`}></div>
            <div className={`step-title`}>4. La mise en tube</div>
            Verser dans les tubes à l'aide d'un entonnoir si besoin.<br></br>
            Tenir le tube vide dans un torchon au cas où des gouttes de la préparation chaude s'échappent.

            <div className={`section-separator`}></div>

            <RecipeSectionTitle title='Les coûts' />
            Huile de coco désodorisée 13,60€ / L chez <a href='https://www.naturalia.fr/huile-de-coco-desodorisee-50cl' target='_blank'>Naturalia</a><br></br>
            <br></br>

            <div className={`section-separator`}></div>
        </RecipeTemplate>
    );
}

export default RecipeTwo;
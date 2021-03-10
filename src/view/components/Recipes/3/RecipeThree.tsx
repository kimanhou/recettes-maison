import React, { useState } from 'react';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import ListItem from '../Template/ListItem/ListItem';
import RecipeHighlight from '../Template/RecipeHighlight/RecipeHighlight';
import RecipeImage from '../Template/RecipeImage/RecipeImage';
import RecipeSectionTitle from '../Template/RecipeSectionTitle/RecipeSectionTitle';
import RecipeTemplate, { getBackgroundColor } from '../Template/RecipeTemplate';
import './RecipeThree.scss';


const RecipeThree : React.FC = props => {
    const image = require(`./images/hero-image.jpg`).default;

    const [materielActive, setMaterielActive] = useState(false);
    const materielOnActive = () => {
        setMaterielActive(true);
    }

    const materielOnUnactive = () => {
        setMaterielActive(false);
    }

    return (
        <RecipeTemplate recipeId={3} classname={`three`}>
            <RecipeSectionTitle title='En résumé' />
            La lessive est le produit du quotidien <RecipeHighlight>le plus simple</RecipeHighlight> à faire soi-même. Elle est également très peu coûteuse et les ingrédients sont facilement trouvables en grande surface, ce qui fait de cette recette la plus accessible pour les débutants.<br></br>
            La préparation est extrêmement rapide et ne présente aucune difficulté.
            <br></br>
            <br></br>
            Temps de préparation : 20 min + refroidissement
            
            <div className={`section-separator`}></div>
            
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
                    <ListItem text={`Une râpe`} dotColor={getBackgroundColor(0, 4)} active={materielActive}/>
                    <ListItem text={`Une grande casserole`} dotColor={getBackgroundColor(1, 4)} active={materielActive}/>
                    <ListItem text={`Une plaque chauffante`} dotColor={getBackgroundColor(2, 4)} active={materielActive}/>
                    <ListItem text={`Un contenant`} dotColor={getBackgroundColor(3, 4)} active={materielActive}/>
                    <ListItem text={`Un entonnoir (optionnel)`} dotColor={getBackgroundColor(4, 4)} active={materielActive}/>
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
            <div className={`step-separator`}></div>
            <div className={`step-title`}>5. La décoration</div>
            Télécharger l'étiquette en cliquant <a href='./images/etiquette-lessive.pdf' target='_blank'>ici</a>.<br></br>
            Imprimer et coller sur le pot.

            <div className={`section-separator`}></div>

            <RecipeSectionTitle title='Des liens utiles' />
            <a href='https://www.bananapancakes.fr/reconnaitre-un-vrai-savon-de-marseille/' target='_blank'><RecipeHighlight>Banana Pancakes</RecipeHighlight></a> : comment reconnaître un vrai savon de Marseille
            <br></br><br></br>
            <a href='https://www.marius-fabre.com/fr/' target='_blank'><RecipeHighlight>Marius Fabre</RecipeHighlight></a> : fabricant de savon de Marseille
            <br></br><br></br>
            <a href='https://mescoursesenvrac.com/bicarbonate-de-soude-cristaux-de-soude-et-soude-caustique-quelles-differences-et-quels-usages/' target='_blank'><RecipeHighlight>Mes courses en vrac</RecipeHighlight></a> : bicarbonate de soude vs cristaux de soude

            <div className={`section-separator`}></div>

            <RecipeSectionTitle title='Les coûts' />
            Savon de Marseille Marius Fabre 400g 3,50€ (ou 200g pour 3€) à la pharmacie de Tolbiac, soit 0,35€ pour 1L de lessive<br></br>
            Savon noir liquide Marius Fabre 250mL 4€ à la pharmacie de Tolbiac, soit 0,40€ pour 1L de lessive<br></br>
            Il est possible de trouver moins cher en grande surface, ces produits se trouvent au rayon lessive, et non savon.<br></br><br></br>
            Cristaux de soude 500g pour 2,75€ en grande surface, soit environ 0,03€ pour 1L de lessive<br></br><br></br>
            <RecipeHighlight>Total : moins d'1€ / L de lessive</RecipeHighlight>

            <div className={`section-separator`}></div>


            <div className={`flex-column`}>
                <RecipeImage imageUrl={image} title={`Ma lessive`} text={`maison`} />
            </div>

            <div className={`section-separator`}></div>
        </RecipeTemplate>
    );
}

export default RecipeThree;
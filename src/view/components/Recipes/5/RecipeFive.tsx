import React, { useState } from 'react';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import ListItem from '../Template/ListItem/ListItem';
import RecipeHighlight from '../Template/RecipeHighlight/RecipeHighlight';
import RecipeImage from '../Template/RecipeImage/RecipeImage';
import RecipeSectionTitle from '../Template/RecipeSectionTitle/RecipeSectionTitle';
import RecipeTemplate, { getBackgroundColor } from '../Template/RecipeTemplate';
import './RecipeFive.scss';


const RecipeFive : React.FC = props => {
    const image = require(`./images/hero-image.jpg`).default;

    const [materielActive, setMaterielActive] = useState(false);
    const materielOnActive = () => {
        setMaterielActive(true);
    }

    const materielOnUnactive = () => {
        setMaterielActive(false);
    }

    return (
        <RecipeTemplate recipeId={5} classname={`five`}>
            <div className={`two-columns`}>
                <div className={`column`}>
                    <RecipeSectionTitle title='Les ingrédients' />
                    <div className={`ingredients`}>
                        <div className={`ingredients-column`}>
                            50g<br></br>
                            1 cuillère à soupe<br></br>
                            0.8L<br></br>
                            1 cuillère à soupe<br></br>
                            1 cuillère à soupe<br></br>
                            1 cuillère à soupe<br></br>
                            Quelques gouttes
                        </div>
                        <div className={`ingredients-column`}>
                            Savon de Marseille<br></br>
                            Savon noir liquide<br></br>
                            Eau bouillante 💦<br></br>
                            Cristaux de soude<br></br>
                            Bicarbonate de soude<br></br>
                            Vinaigre d'alcool (optionnel)<br></br>
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
            Mélanger le savon de Marseille en copeaux et le savon noir dans l'eau bouillante.<br></br>
            Bien mélanger.
            <div className={`step-separator`}></div>
            <div className={`step-title`}>3. L'ajout des bases</div>
            Une fois le mélange bien homogène, ajouter le bicarbonate de soude, le vinaigre d'alcool et les cristaux de soude.<br></br>
            Attention, ça mousse.
            <div className={`step-separator`}></div>
            <div className={`step-title`}>4. Le refroidissement</div>
            Laisser refroidir en mélangeant énergiquement. Ajouter l'huile essentielle durant cette phase.<br></br>
            Afin d'éviter que le produit final ne soit compact, il faut bien remuer durant toute la phase de refroidissement. Passer au mixeur si besoin.<br></br>
            Verser le produit final dans son contenant.
            <div className={`step-separator`}></div>
            <div className={`step-title`}>5. La décoration</div>
            Télécharger l'étiquette en cliquant <a href='./images/etiquette-liquide-vaisselle.pdf' target='_blank'>ici</a>.<br></br>
            Imprimer et coller sur le contenant.

            <div className={`section-separator`}></div>

            <RecipeSectionTitle title='Des liens utiles' />
            <a href='https://www.bananapancakes.fr/reconnaitre-un-vrai-savon-de-marseille/' target='_blank'><RecipeHighlight>Banana Pancakes</RecipeHighlight></a> : comment reconnaître un vrai savon de Marseille
            <br></br><br></br>
            <a href='https://www.marius-fabre.com/fr/' target='_blank'><RecipeHighlight>Marius Fabre</RecipeHighlight></a> : fabricant de savon de Marseille
            <br></br><br></br>
            <a href='https://mescoursesenvrac.com/bicarbonate-de-soude-cristaux-de-soude-et-soude-caustique-quelles-differences-et-quels-usages/' target='_blank'><RecipeHighlight>Mes courses en vrac</RecipeHighlight></a> : bicarbonate de soude vs cristaux de soude

            <div className={`section-separator`}></div>

            <RecipeSectionTitle title='Les coûts' />
            Savon de Marseille Marius Fabre 400g 3,50€ à la pharmacie de Tolbiac, soit 0,44€ pour cette recette<br></br>
            Savon noir liquide Marius Fabre 250mL 4€ à la pharmacie de Tolbiac, soit 0,24€ pour cette recette<br></br>
            Il est possible de trouver moins cher en grande surface, ces produits se trouvent au rayon lessive, et non savon.<br></br><br></br>
            Cristaux de soude 500g pour 2,75€ en grande surface, soit environ 0,03€ pour cette recette<br></br>
            Bicarbonate de soude 500g pour 3€ en grande surface, soit 0,03€ pour cette recette<br></br><br></br>
            <RecipeHighlight>Total : moins d'1€ / 0.8L de liquide vaisselle</RecipeHighlight>

            <div className={`section-separator`}></div>


            <div className={`flex-column`}>
                <RecipeImage imageUrl={image} title={`Ma lessive`} text={`maison`} />
            </div>

            <div className={`section-separator`}></div>
        </RecipeTemplate>
    );
}

export default RecipeFive;
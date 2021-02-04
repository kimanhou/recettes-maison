import React, { useState } from 'react';
import ScreenDetector from '../../ScreenDetector/screenDetector';
import ListItem from '../Template/ListItem/ListItem';
import RecipeHighlight from '../Template/RecipeHighlight/RecipeHighlight';
import RecipeImage from '../Template/RecipeImage/RecipeImage';
import RecipeSectionTitle from '../Template/RecipeSectionTitle/RecipeSectionTitle';
import RecipeTemplate from '../Template/RecipeTemplate';
import './RecipeOne.scss';


const RecipeOne : React.FC = props => {
    // --color-white: rgb(251, 251, 251);
    // --color-charcoal: rgb(54, 63, 73);
    const calculateValueOfBackgroundColor = (from : number, to : number, distance : number, distanceTotale : number) => {
        return from + (to - from) * (distance / distanceTotale);
    }

    const getBackgroundColor = (distance : number) => {
        return `rgb(${calculateValueOfBackgroundColor(54, 251, distance, 9)}, ${calculateValueOfBackgroundColor(63, 251, distance, 9)}, ${calculateValueOfBackgroundColor(73, 251, distance, 9)})`;
    }

    const [materielActive, setMaterielActive] = useState(false);
    const materielOnActive = () => {
        setMaterielActive(true);
    }

    const materielOnUnactive = () => {
        setMaterielActive(false);
    }

    return (
        <RecipeTemplate recipeId={1} classname={`one`}>
            <RecipeSectionTitle title='En résumé' />
            Le savon est le produit d’une réaction chimique entre une base forte et une matière grasse.
            Les deux éléments principaux ici sont donc <RecipeHighlight>la lessive de soude</RecipeHighlight> et deux huiles: <RecipeHighlight>l’huile de coco</RecipeHighlight> pour le côté moussant et <RecipeHighlight>l’huile de sésame</RecipeHighlight> pour le gras. 
            On y ajoute une <RecipeHighlight>fragrance de synthèse</RecipeHighlight> à la fois pour l’odeur et comme catalyseur. Celle-ci va en effet accélérer la réaction chimique et donc le durcissement du produit et ainsi raccourcir le temps de séchage entre deux couches.
            
            La préparation prend environ 1h, selon la complexité du motif que l’on souhaite réaliser, et s’effectue à <RecipeHighlight>température ambiante</RecipeHighlight>. Ensuite, il faudra attendre environ <RecipeHighlight>un mois</RecipeHighlight> avant de pouvoir utiliser le produit final.
            
            <div className={`section-separator`}></div>
            
            <RecipeSectionTitle title='La saponification à froid' />
            La soude attaque le gras contenu dans l’huile. C’est une <RecipeHighlight>réaction totale</RecipeHighlight> mais assez <RecipeHighlight>lente à température ambiante</RecipeHighlight>, 
            d’où le temps de séchage de 4 semaines. Il faut donc que l’huile soit en excès par rapport à la soude. 
            De plus, les huiles utilisées contiennent des éléments, dits insaponifiables, qui ne réagissent pas avec la soude et qui resteront sous forme d’huile dans le produit final. 
            On obtiendra donc un <RecipeHighlight>savon surgras</RecipeHighlight>.

            <div className={`section-separator`}></div>
            
            <div className={`two-columns`}>
                <div className={`column`}>
                    <RecipeSectionTitle title='Les ingrédients' />
                    Les quantités indiquées correspondent à environ 500g de savon, ce qui permet de se laver les mains pendant approximativement une année, évidemment moins en période de pandémie.
                    <br></br>
                    <br></br>
                        
                    <div className={`ingredients`}>
                        <div className={`ingredients-column`}>
                            385g<br></br>
                            97g<br></br>
                            204g<br></br>
                            14g<br></br>
                            1g
                        </div>
                        <div className={`ingredients-column`}>
                            Huile de coco désodorisée &#129381;<br></br>
                            Huile de sésame<br></br>
                            Lessive de soude à 30%<br></br>
                            Fragrance<br></br>
                            Mika (pigments minéraux)
                        </div>
                    </div>
                </div>
                <div className={`column`}>
                    <RecipeSectionTitle title='Le matériel' />
                    <ScreenDetector className={`screen-detector-materiel`} onActive={materielOnActive} onUnactive={materielOnUnactive} />
                    <ListItem text={`Une boîte en carton ou moules en silicone 🥡`} dotColor={getBackgroundColor(1)} active={materielActive}/>
                    <ListItem text={`Une balance de cuisine`}dotColor={getBackgroundColor(2)} active={materielActive} activeDelay={`0.2s`}/>
                    <ListItem text={`2-3 Eco cups selon le nombre de couleurs différentes`}dotColor={getBackgroundColor(3)} active={materielActive} activeDelay={`0.4s`}/>
                    <ListItem text={`Un grand saladier ou une carafe`}dotColor={getBackgroundColor(4)} active={materielActive} activeDelay={`0.6s`}/>
                    <ListItem text={`Une spatule pour râcler`} dotColor={getBackgroundColor(5)} active={materielActive} activeDelay={`0.8s`}/>
                    <ListItem text={`Des bâtonnets pour touiller`} dotColor={getBackgroundColor(6)} active={materielActive} activeDelay={`1s`}/>
                    <ListItem text={`Des gants de ménage`} dotColor={getBackgroundColor(7)} active={materielActive} activeDelay={`1.2s`}/>
                    <ListItem text={`Une blouse`} dotColor={getBackgroundColor(8)} active={materielActive} activeDelay={`1.4s`}/>
                    <ListItem text={`Des lunettes de protection`} dotColor={getBackgroundColor(9)} active={materielActive} activeDelay={`1.6s`}/>
                </div>
            </div>
            
            <div className={`section-separator`}></div>
            
            <RecipeSectionTitle title='La procédure' />
            <div className={`step-title`}>1. La préparation de l’huile de coco</div>
            Faire chauffer l’huile de coco pour la rendre liquide.
            <div className={`step-separator`}></div>
            <div className={`step-title`}>2. Les pesées</div>
            Peser l’huile de coco, l’huile de sésame et la lessive de soude séparément.<br></br>
            Puis la fragrance et les pigments. Ces derniers peuvent être dosés à l’oeil et la quantité peut être réajustée lors de l’ajout dans la préparation si besoin.
            <div className={`step-separator`}></div>
            <div className={`step-title`}>3. Le mélange des huiles</div>
            Verser l’huile de coco dans l’huile de sésame. Mélanger grossièrement et réserver.<br></br>
            Préparer la boîte en carton, la pencher sur des cales si besoin.
            <div className={`step-separator`}></div>
            <div className={`step-title`}>4. La saponification à froid</div>
            Mélanger la lessive de soude aux huiles.<br></br>
            Homogénéiser et mélanger au mixeur jusqu’à ce que la préparation soit opaque et visqueuse, comme une pâte à crêpes.
            <div className={`step-separator`}></div>
            <div className={`step-title`}>5. La mise en boîte</div>
            Séparer dans des verres selon le nombre de couleurs différentes. Ajouter les pigments, bien mélanger.<br></br>
            Ajouter la fragrance, bien mélanger et verser dans la boîte<br></br>
            Bien râcler le verre, claquer la boîte sur la table pour répartir la pâte.<br></br>
            <div className={`step-separator`}></div>
            <div className={`step-title`}>6. Le séchage de la première couche</div>
            Attendre environ 10 min que la première couche sèche, il faut pouvoir retourner la boîte.
            <div className={`step-separator`}></div>
            <div className={`step-title`}>7. Les couches suivantes (optionnel)</div>
            Pendant le séchage de la première couche, préparer la seconde couche en séparant de nouveau la pâte si besoin, et en ajoutant les pigments. Continuer à touiller de temps en temps et surveiller que la pâte ne durcisse pas trop dans le verre.<br></br>
            Une fois la première couche complètement sèche, ajouter la fragrance dans la pâte, mélanger et verser dans la boîte.<br></br>
            Répéter cette opération pour chaque couleur.
            <div className={`step-separator`}></div>
            <div className={`step-title`}>8. Le séchage du savon</div>
            Laisser sécher la boîte ouverte dans un endroit sec et sans odeur pendant 2 jours. Couper le pain de savon en tranches.<br></br>
            Puis laisser sécher 4 semaines avant utilisation.
            
            <div className={`section-separator`}></div>
            
            <RecipeSectionTitle title='Des motifs' />
            <span className={`uppercase`}>Le monochrome</span> : une seule couleur, une seule couche.<br></br><br></br>
            <span className={`uppercase`}>Le marbré</span> : mélange de deux couleurs, les deux couches sont versées simultanément dans la boîte.<br></br><br></br>
            <span className={`uppercase`}>Les rayures</span> : superposition des couches.<br></br><br></br>
            <span className={`uppercase`}>La diagonale</span> : on verse la première couche dans une boîte préalablement penchée. Une fois sèche, on penche la boîte dans l'autre sens et on verse la seconde couche.<br></br><br></br>
            <span className={`uppercase`}>La double diagonale</span> : on verse la première couche (la moitié de la préparation) dans une boîte préalablement penchée. Une fois sèche, on penche la boîte dans l'autre sens et on verse la seconde couche (la moitié de ce qu'il reste de la préparation). On remet la boîte droite pour la dernière couche.
           
            <div className={`flex-line motifs-container`}>
                <RecipeImage imageUrl={'https://www.instagram.com/p/CJswhmhFBjh/'} title={`Le monochrome`} text={`@ciment.paris`} />
                <RecipeImage imageUrl={'https://www.instagram.com/p/CJqNC1xgQHK/'} title={`Les rayures`} text={`@ciment.paris`} />
                <RecipeImage imageUrl={'https://www.instagram.com/p/B9W5PPZqNYI/'} title={`La diagonale`} text={`@ciment.paris`} />
                <RecipeImage imageUrl={'https://www.instagram.com/p/Bkhc5b5AmvH/'} title={`La double diagonale`} text={`@ciment.paris`} />
            </div>


            <div className={`section-separator`}></div>

            <RecipeSectionTitle title='Des liens utiles' />
            <a href='https://www.ciment.paris/' target='_blank'><RecipeHighlight>Savonnerie Ciment</RecipeHighlight></a> : ateliers, vente de produits finis et de matières premières
            <br></br><br></br>
            <a href='https://calc.mendrulandia.es/' target='_blank'><RecipeHighlight>Mendrulandia</RecipeHighlight></a> : calculateur de quantités 
            <br></br><br></br>
            <a href='https://www.aroma-zone.com/info/fiche-savoir-faire/la-saponification-a-froid' target='_blank'><RecipeHighlight>Aroma zone</RecipeHighlight></a> : explications détaillées de la saponification à froid, vente de fragrance de synthèse

            <div className={`section-separator`}></div>
            
            <RecipeSectionTitle title='Les coûts' />
            Huile de coco désodorisée 13,60€ / L chez <a href='https://www.naturalia.fr/huile-de-coco-desodorisee-50cl' target='_blank'>Naturalia</a>, soit 5,73€ par pain de savon<br></br>
            Huile de sésame 16,20€ / L chez <a href='https://www.naturalia.fr/huile-de-sesame-50cl-3753165' target='_blank'>Naturalia</a>, soit 1,71€ par pain de savon<br></br>

            <div className={`section-separator`}></div>
        </RecipeTemplate>
    );
}

export default RecipeOne;
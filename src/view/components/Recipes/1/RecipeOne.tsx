import React from 'react';
import RecipeTemplate from '../Template/RecipeTemplate';


const RecipeOne : React.FC = props => {
    return (
        <RecipeTemplate recipeId={1} >
            <div className={`main-wrapper`}>
                <div className={`section-title`}>En résumé</div>
                Le savon est le produit d’une réaction chimique entre une base forte et une matière grasse.
                Les deux éléments principaux ici sont donc <b>la lessive de soude</b> et deux huiles: <b>l’huile de coco</b> pour le côté moussant et <b>l’huile de sésame</b> pour le gras. 
                On y ajoute une <b>fragrance de synthèse</b> à la fois pour l’odeur et comme catalyseur. Celle-ci va en effet accélérer la réaction chimique et donc le durcissement du produit et ainsi raccourcir le temps de séchage entre deux couches.
                
                La préparation prend environ 1h, selon la complexité du motif que l’on souhaite réaliser, et s’effectue à <b>température ambiante</b>. Ensuite, il faudra attendre environ <b>un mois</b> avant de pouvoir utiliser le produit final.
                
                <div className={`section-separator`}></div>
                
                <div className={`section-title`}>La saponification à froid</div>
                La soude attaque le gras contenu dans l’huile. C’est une <b>réaction totale</b> mais assez <b>lente à température ambiante</b>, 
                d’où le temps de séchage de 4 semaines. Il faut donc que l’huile soit en excès par rapport à la soude. 
                De plus, les huiles utilisées contiennent des éléments, dits insaponifiables, qui ne réagissent pas avec la soude et qui resteront sous forme d’huile dans le produit final. 
                On obtiendra donc un <b>savon surgras</b>.

                <div className={`section-separator`}></div>
                
                <div className={`section-title`}>Les ingrédients</div>
                Les quantités indiquées correspondent à environ 500g de savon, ce qui permet de se laver les mains pendant approximativement une année, évidemment moins en période de pandémie.
                <br></br>
                <b>385g Huile de coco désodorisée 
                <br></br>
                97g Huile de sésame
                <br></br>
                204g Lessive de soude à 30%
                <br></br> 
                14g Fragrance
                <br></br>
                1g Mika (pigments minéraux)</b>

                <div className={`section-separator`}></div>
                
                <div className={`section-title`}>Le matériel</div>
                Une boîte en carton ou moules en silicone
                <br></br>
                Une balance de cuisine
                <br></br>
                2-3 Eco cups selon le nombre de couleurs différentes
                <br></br>
                Un grand saladier ou une carafe Une spatule pour râcler
                <br></br>
                Des batonnets pour touiller Des gants de ménage
                <br></br>
                Une blouse
                <br></br>
                Des lunettes de protection
                <br></br>

                <div className={`section-separator`}></div>
                
                <div className={`section-title`}>La procédure</div>
                <div className={`step-title`}>1. La préparation de l’huile de coco</div>
                Faire chauffer l’huile de coco pour la rendre liquide.
                <div className={`step-separator`}></div>
                <div className={`step-title`}>2. Les pesées</div>
                Peser l’huile de coco, l’huile de sésame et la lessive de soude séparément. Puis la fragrance et les pigments. Ces derniers peuvent être dosés à l’oeil et la quantité peut être réajustée lors de l’ajout dans la préparation si besoin.
                <div className={`step-separator`}></div>
                <div className={`step-title`}>3. Le mélange des huiles</div>
                Verser l’huile de coco dans l’huile de sésame. Mélanger grossièrement et réserver. Préparer la boîte en carton, la pencher sur des cales si besoin.
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
            </div>
        </RecipeTemplate>
    );
}

export default RecipeOne;
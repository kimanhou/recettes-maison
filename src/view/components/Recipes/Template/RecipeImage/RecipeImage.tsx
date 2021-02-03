import React, { useEffect, useState } from 'react';
import './RecipeImage.scss';

interface IRecipeImageProps {
    imageUrl : string;
    title : string;
    text : string;
}

const RecipeImage : React.FC<IRecipeImageProps> = props => {
    const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
    useEffect(() => {
        fetch(`https://graph.facebook.com/v9.0/instagram_oembed?url=${props.imageUrl}&access_token=857325501713225|f2b27b7ab1af66fad966fe773ffcaaf3`)
            .then(resp => {
                if (resp.ok){
                    return resp.json();
                }
                throw new Error(resp.statusText);
            })
            .then(json => json["thumbnail_url"])
            .then(setThumbnailUrl)
    }, []);

    return (
        <div className={`recipe-image`} style={{ backgroundImage: `url('${thumbnailUrl}')` }}>
            <a href={props.imageUrl} target='_blank'>
                <div className={`hover-shadow`}></div>
                <div className={`recipe-image-content`}>
                    <div className={`recipe-image-title`}>
                        {props.title}
                    </div>
                    <div className={`recipe-image-text`}>
                        {props.text}
                    </div>
                </div>
            </a>
        </div>
    );
}

export default RecipeImage;
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import Filters from '../../../business/Filters';
import Category from '../../../model/Category';
import Recipe from '../../../model/Recipe';
import { useQueryParams } from '../../hooks/UseQueryParams';
import FadeIn from '../FadeIn/FadeIn';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import RecipePreview from '../RecipePreview/RecipePreview';
import './AllRecipes.scss';
import CategoryButton from './CategoryButton';

const AllRecipes : React.FC = props => {
    const queryParams = useQueryParams();
    let categoriesString = queryParams['categories'];
    let categories : Category[] = [];
    if (categoriesString !== undefined) {
        categories = (JSON.parse(categoriesString) as string[]).map(Category.deserialize);
    }
    let displayedRecipes = Filters.getRecipes(categories);
    
    const isCategorySelected = (category : Category) => {
        return categories.includes(category);
    }

    const history = useHistory();
    const location = useLocation();
    const setSelectedCategories = (categories : Category[]) => {
        const {categories : tagsParams, ...otherQueryParams} = queryParams;
        const search = Object.keys(otherQueryParams).map(key => `${key}=${encodeURIComponent(queryParams[key]!)}`);
        history.push(`${location.pathname}?${Category.toQueryParam(categories)}${search}`)
    }

    const allCategories = Category.getAllCategories();

    const postsColumn1 = displayedRecipes.filter((t , index) => index % 3 === 0);
    const postsColumn2 = displayedRecipes.filter((t , index) => index % 3 === 1);
    const postsColumn3 = displayedRecipes.filter((t , index) => index % 3 === 2);

    const formatColumn = (recipes : Recipe[]) => {
        return recipes.map(t => {
            if (t.getCategory().equals(Category.HYGIENE) ) {
                return <FadeIn noDelay>
                        <RecipePreview recipe={t} backgroundColor={'apricot'} />
                    </FadeIn> ;
            }
            else if (t.getCategory().equals(Category.CLEANING) ) {
                return <FadeIn noDelay>
                        <RecipePreview recipe={t} backgroundColor={'light-grey'} />
                    </FadeIn> ;
            }
            else {
                return <FadeIn noDelay>
                        <RecipePreview recipe={t} backgroundColor={'grey'} />
                    </FadeIn> ;
            }
        })
    }

    const [isInvisible, setIsInvisible] = useState(false);
    const isInvisibleClassname = isInvisible ? 'is-invisible' : '';

    const onCategoryClick = (category : Category) => {
        setIsInvisible(true);
        setTimeout(() => {
            setSelectedCategories([ category ]);
            setIsInvisible(false);
        }, 1000);
    }

    return (
        <div className={`all-recipes`}>
            <Header />
            <Navigation />
            <div className={`main-wrapper`}>
                <div className={`all-recipes-title`}>
                    Les recettes
                </div>
                <div className={`blog-categories`}>
                    <div className={`blog-categories-container`}>
                        {allCategories.map(t => <CategoryButton category={t} isSelected={isCategorySelected(t)} onClick={() => onCategoryClick(t)}/>)}
                    </div>
                </div>
                <div className={`recipes ${isInvisibleClassname}`}>
                    <div className={`recipes-column`}>
                        {formatColumn(postsColumn1)}
                    </div>
                    <div className={`recipes-column`}>
                        {formatColumn(postsColumn2)}
                    </div>
                    <div className={`recipes-column`}>
                        {formatColumn(postsColumn3)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllRecipes;
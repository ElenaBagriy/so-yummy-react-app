import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularRecipes } from 'redux/recipes/recipesOperations';
import { selectPopularRecipes } from 'redux/selectors';
import { Description, Image, Link, PopularStyled, RecipeItem, RecipeTitle, RecipesList, Title } from './PopularRecipe.styled';
import { useMediaQuery } from '@mui/material';
import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText';

export const PopularRecipe = () => {
  const dispatch = useDispatch();

  const recipes = useSelector(selectPopularRecipes);
  const [deviceType, setDeviceType] = useState('');

  const mobile = useMediaQuery('(max-width: 767px)');
  const tablet = useMediaQuery('(min-width: 768px)');
  const desktop = useMediaQuery('(min-width: 1280px)');
    
  const length = useMemo(() => {
    let lengthOptions;
    switch (deviceType) {
      case 'mobile':
        lengthOptions = {
          title: 18,
          text: 100,
        };
        break;
      case 'tablet':
        lengthOptions = {
          title: 18,
          text: 100,
        };
        break;
      case 'desktop':
        lengthOptions = {
          title: 18,
          text: 92,
        };
        break;
      default:
        lengthOptions = {
          title: 10,
          text: 10,
        };
        break;
    }
    return lengthOptions;
        
  }, [deviceType]);

    
  useEffect(() => {
    if (mobile) { setDeviceType('mobile') };
    if (tablet) { setDeviceType('tablet') };
    if (desktop) { setDeviceType('desktop') };      
  }, [mobile, tablet, desktop, deviceType, length]);
  
  useEffect(() => {
    dispatch(getPopularRecipes());
  }, [dispatch]);

  return (
    <PopularStyled>
      <Title>Popular recipe</Title>
      <RecipesList>
        {recipes ? (
          recipes.map(({ _id, preview, title, description }) => {
            return (
              <RecipeItem key={_id}>
                <Link to={`/recipe/${_id}`}>
                  <Image src={preview} alt={title} />
                  <div>
                    <RecipeTitle>
                      <EllipsisText text={title} length={length.title} tooltip='true'/>
                    </RecipeTitle>
                    <Description>
                      <EllipsisText text={description} length={length.text} tooltip='true'/>
                    </Description>
                  </div>
                </Link>
              </RecipeItem>
            );
          })
        ) : (
          <p>Sorry, no popular recipes</p>
        )}
      </RecipesList>
    </PopularStyled>
  );
};

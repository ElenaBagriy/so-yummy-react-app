import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularRecipes } from 'redux/recipes/recipesOperations';
import { selectPopularRecipes } from 'redux/selectors';
import { PopularStyled } from './PopularRecipe.styled';
import { Link } from 'react-router-dom';

export const PopularRecipe = () => {
  const dispatch = useDispatch();

  const recipies = useSelector(selectPopularRecipes);

  useEffect(() => {
    dispatch(getPopularRecipes());
  }, [dispatch]);

  return (
    <PopularStyled>
      <h3>Popular recipe</h3>
      <ul>
        {recipies ? (
          recipies.map(({ _id, preview, title, description }) => {
            const shortTitle = title.split(' ').slice(0, 2).join(' ');
            const shortDescription = description
              .split(' ')
              .slice(0, 15)
              .join(' ');
            return (
              <li key={_id}>
                <Link to={`/recipy/${_id}`} className="wrapper">
                  <img src={preview} alt={title} />
                  <div className="textWrapper">
                    <h4>{shortTitle}</h4>
                    <p>{shortDescription}...</p>
                  </div>
                </Link>
              </li>
            );
          })
        ) : (
          <p>Sorry, no popular recipies</p>
        )}
      </ul>
    </PopularStyled>
  );
};

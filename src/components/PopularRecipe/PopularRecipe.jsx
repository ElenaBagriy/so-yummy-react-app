import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularRecipes } from 'redux/recipes/recipesOperations';
import { selectPopularRecipes } from 'redux/selectors';
import { PopularStyled } from './PopularRecipe.styled';

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
            return (
              <li key={_id}>
                {/* <Link to={`/recipies/${id}`}> */}
                <img src={preview} alt={title} />
                <div className="textWrapper">
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>

                {/* </Link> */}
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

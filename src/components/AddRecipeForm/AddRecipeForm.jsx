import React, { useEffect } from 'react';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from 'redux/recipes/recipesOperations';
import { selectCategoryList } from 'redux/selectors';

export const AddRecipeForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const categories = useSelector(selectCategoryList);

  return (
    <>
      <RecipeDescriptionFields categories={categories} />
      <RecipeIngredientsFields />
      <RecipePreparationFields />
    </>
  );
};

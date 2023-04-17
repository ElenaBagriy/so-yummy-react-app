import React, { useEffect } from 'react';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategories,
  getIngredients,
} from 'redux/recipes/recipesOperations';
import { selectCategoryList, selectIngredients } from 'redux/selectors';
// import { useForm } from 'react-hook-form';

export const AddRecipeForm = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getIngredients());
  }, [dispatch]);

  const categories = useSelector(selectCategoryList);
  console.log(categories);

  const ingredients = useSelector(selectIngredients);
  console.log(ingredients);

  return (
    <>
      <form onSubmit={onSubmit}>
        <RecipeDescriptionFields categories={categories} />
        <RecipeIngredientsFields ingredients={ingredients} />
        <RecipePreparationFields />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

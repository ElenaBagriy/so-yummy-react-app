import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  getAllCategories,
  getIngredients,
} from 'redux/recipes/recipesOperations';
import { selectCategoryList, selectIngredients } from 'redux/selectors';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';

export const AddRecipeForm = () => {
  const {
    handleSubmit,
    //   register,
    //   watch,
    // formState: { errors, isDirty, isValid },
  } = useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getIngredients());
  }, [dispatch]);

  const categories = useSelector(selectCategoryList);
  const ingredients = useSelector(selectIngredients);
  // console.log(ingredients);

  return (
    <>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <RecipeDescriptionFields categories={categories} />
        <RecipeIngredientsFields ingredients={ingredients} />
        <RecipePreparationFields />
        <button
          type="submit"
          // disabled={!isDirty || !isValid}
        >
          Add
        </button>
      </form>
    </>
  );
};

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
import { StyledAddRecipyContainer } from './AddRecipeForm.styled';

export const AddRecipeForm = () => {
  const {
    handleSubmit,
    //   register,
    //   watch,
    // formState: { errors, isDirty, isValid },
  } = useForm();

  const onSubmit = (data, e) => console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getIngredients());
  }, [dispatch]);

  const categories = useSelector(selectCategoryList);
  const ingredients = useSelector(selectIngredients);
  // console.log(ingredients);

  return (
    <StyledAddRecipyContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RecipeDescriptionFields categories={categories} />
        <RecipeIngredientsFields ingredients={ingredients} />
        <RecipePreparationFields />
        <button
          type="submit"
          className="submitBtn"
          // disabled={!isDirty || !isValid}
        >
          Add
        </button>
      </form>
    </StyledAddRecipyContainer>
  );
};

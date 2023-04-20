import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  getAllCategories,
  getIngredients,
} from 'redux/recipes/recipesOperations';
import { selectCategoryList, selectIngredients } from 'redux/selectors';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';
import { StyledAddRecipeContainer } from './AddRecipeForm.styled';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientFields';

export const AddRecipeForm = () => {
  const {
    handleSubmit,
    //   register,
    //   watch,
    // formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      image: '',
      title: '',
      about: '',
      category: 'breakfast',
      time: '40',
      ingredients: [{ quantity: '', measure: 'tbs', id: '' }],
      preparation: [],
    },
  });

  const onSubmit = data => {
    console.log('data', data);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getIngredients());
  }, [dispatch]);

  const categories = useSelector(selectCategoryList);
  // console.log(categories);

  const ingredients = useSelector(selectIngredients);
  // console.log(ingredients);

  return (
    <StyledAddRecipeContainer>
      <form onSubmit={() => handleSubmit(onSubmit)}>
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
    </StyledAddRecipeContainer>
  );
};

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  getAllCategories,
  getIngredients,
} from 'redux/recipes/recipesOperations';
import { selectCategoryList, selectIngredients } from 'redux/selectors';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
// import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';
import { StyledAddRecipeContainer } from './AddRecipeForm.styled';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientFields';

export const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoryList);
  const ingredients = useSelector(selectIngredients);

  const {
    handleSubmit,
    register,
    control,
      watch,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      fullImage: '',
      title: '',
      description: '',
      category: 'breakfast',
      time: '40',
      ingredients: [],
      instructions: [],
    },
  });

  const onSubmit = data => {
    console.log(data);

    // const descFieldsValues = {
    //   ...data,
    //   category: categoryValue,
    //   time: timeValue,
    //   fullImage: selectedImgFile,
    // };
    // console.log(descFieldsValues);

    // console.log('data', data);
  };


  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getIngredients());
  }, [dispatch]);


  return (
    <StyledAddRecipeContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
          <RecipeDescriptionFields
            register={register}
            categories={categories}
            control={control}
        />
        <RecipeIngredientsFields
          register={register}
          control={control}
          ingredients={ingredients}
          watch={watch}
        />
        {/* <RecipePreparationFields /> */}
        <button type="submit" className="submitBtn">
          Add
        </button>
        </form>
    </StyledAddRecipeContainer>
  );
};

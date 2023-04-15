import React from 'react';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';

export const AddRecipeForm = () => {
  return (
    <>
      <RecipeDescriptionFields />
      <RecipeIngredientsFields />
      <RecipePreparationFields />
    </>
  );
};

import React from 'react';
import { StyledPreparation } from './RecipePreparationFields.styled';

export const RecipePreparationFields = ({
  register,
  control
}) => {

  return (
    <StyledPreparation>
      <h3>Recipe Preparation</h3>
      <label>
        <textarea
          placeholder="Enter recipe"
          name="instructions"
          control={control}
          {...register('instructions')}
        ></textarea>
      </label>
    </StyledPreparation>
  );
};

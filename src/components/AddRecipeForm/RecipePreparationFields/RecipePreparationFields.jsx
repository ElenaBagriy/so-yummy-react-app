import React from 'react';
import { StyledPreparation, Textarea, Title } from './RecipePreparationFields.styled';

export const RecipePreparationFields = ({
  register,
  control
}) => {

  return (
    <StyledPreparation>
      <Title>Recipe Preparation</Title>
      <label>
        <Textarea
          placeholder="Enter recipe"
          name="instructions"
          control={control}
          {...register('instructions')}
        ></Textarea>
      </label>
    </StyledPreparation>
  );
};

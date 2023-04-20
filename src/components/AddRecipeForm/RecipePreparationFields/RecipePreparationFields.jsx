import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledPreparation } from './RecipePreparationFields.styled';

export const RecipePreparationFields = () => {
  const {
    register,
    // handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      preparation: [],
    },
  });

  return (
    <StyledPreparation>
      <h3>Recipe Preparation</h3>
      <label>
        <textarea
          placeholder="Enter recipe"
          name="preparation"
          {...register('preparation')}
        ></textarea>
      </label>
    </StyledPreparation>
  );
};

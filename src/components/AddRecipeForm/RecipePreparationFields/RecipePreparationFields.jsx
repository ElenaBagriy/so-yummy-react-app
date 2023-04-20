import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledPreparation } from './RecipePreparationFields.styled';

export const RecipePreparationFields = () => {
  const {
    register,
    // handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  // const onSubmit = data => console.log(data);

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

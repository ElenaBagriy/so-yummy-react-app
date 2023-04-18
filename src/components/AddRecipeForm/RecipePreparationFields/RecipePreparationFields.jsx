import React from 'react';
import { useForm } from 'react-hook-form';

export const RecipePreparationFields = () => {
  const {
    register,
    // handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  // const onSubmit = data => console.log(data);

  return (
    <div>
      <h3>Recipe Preparation</h3>
      <label>
        <textarea
          placeholder="Enter recipe"
          name="preparation"
          // id=""
          // cols="30"
          // rows="10"
          {...register('recipe', {})}
        ></textarea>
      </label>
    </div>
  );
};

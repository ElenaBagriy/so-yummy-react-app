import React from 'react';
import { useForm } from 'react-hook-form';
import { RecipeDescStyled } from './RecipeDescriptionFields.styled';
import { InputsStyled } from './RecipeDescriptionFields.styled';

export const RecipeDescriptionFields = ({ categories }) => {
  const {
    register,
    // handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  let timeOptions = [];

  const timeGenerator = (min, max) => {
    for (let i = min; i <= max; i += 5) {
      timeOptions.push(i);
    }
    return timeOptions;
  };
  timeGenerator(5, 120);

  return (
    <RecipeDescStyled>
      <input type="file" name="picture" {...register('picture')} />
      <InputsStyled>
        <input placeholder="Enter item title" {...register('title')} />
        <input placeholder="Enter about recipe" {...register('description')} />
        {errors.exampleRequired && <span>This field is required</span>}
        <label>
          Category
          <select {...register('category')}>
            {categories.map(item => (
              <option key={item._id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </label>
        <label>
          {' '}
          Cooking time
          <select placeholder="Cooking time" {...register('time')}>
            {timeOptions.map(item => (
              <option key={item} value={item}>
                {item} min
              </option>
            ))}
          </select>
        </label>
      </InputsStyled>
    </RecipeDescStyled>
  );
};

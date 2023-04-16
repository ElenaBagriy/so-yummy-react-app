import React from 'react';
import { useForm } from 'react-hook-form';
import { RecipeDescStyled } from './RecipeDescriptionFields.styled';

export const RecipeDescriptionFields = ({ categories }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);
  let timeOptions = [];

  const timeGenerator = (min, max) => {
    for (let i = min; i <= max; i += 5) {
      timeOptions.push(i);
    }
    return timeOptions;
  };

  timeGenerator(5, 200);

  return (
    <div>
      <RecipeDescStyled onSubmit={handleSubmit(onSubmit)}>
        <input type="file" name="picture" />
        <div>
          <input placeholder="Enter item title" {...register('title')} />

          <input
            placeholder="Enter about recipe"
            {...register('description')}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <select {...register('category')}>
            {categories.map(item => (
              <option key={item._id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
          <select placeholder="Cooking time" {...register('cooking time')}>
            {timeOptions.map(item => (
              <option key={item} value={item}>
                {item} min
              </option>
            ))}
          </select>
          <button type="submit">Add</button>
        </div>
      </RecipeDescStyled>
    </div>
  );
};

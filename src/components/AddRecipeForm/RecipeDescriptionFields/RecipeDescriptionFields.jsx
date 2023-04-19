import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RecipeDescStyled } from './RecipeDescriptionFields.styled';
import { InputsStyled } from './RecipeDescriptionFields.styled';
import camera from '../../../images/AddRecipe/preview.svg';

export const RecipeDescriptionFields = ({ categories }) => {
  const fileInputRef = useRef();
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = e => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

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
      <label>
        <button
          className="uploadBtn"
          onClick={event => {
            event.preventDefault();
            fileInputRef.current.click();
          }}
        >
          {selectedImage ? (
            <div>
              <img
                src={URL.createObjectURL(selectedImage)}
                className="uploadedImage"
                alt="Thumb"
              />
            </div>
          ) : (
            <img src={camera} alt="camera" />
          )}
        </button>

        <input
          {...register('image')}
          type="file"
          name="image"
          className="upload"
          ref={fileInputRef}
          accept="image/*"
          onChange={imageChange}
        />
      </label>
      <InputsStyled>
        <label>
          <input placeholder="Enter item title" {...register('title')} />
        </label>
        <label>
          <input
            placeholder="Enter about recipe"
            {...register('description')}
          />
        </label>
        {errors.exampleRequired && <span>This field is required</span>}
        <label>
          Category
          <select {...register('category')}>
            {categories.map(item => (
              <option
                key={item.id}
                value={item.title}
                {...register(`${item.title}`)}
              >
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
              <option key={item} value={item} {...register(`${item}`)}>
                {item} min
              </option>
            ))}
          </select>
        </label>
      </InputsStyled>
    </RecipeDescStyled>
  );
};

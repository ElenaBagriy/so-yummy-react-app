import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RecipeDescStyled } from './RecipeDescriptionFields.styled';
import { InputsStyled } from './RecipeDescriptionFields.styled';
import camera from '../../../images/AddRecipe/preview.svg';

// const imageMimeType = /image\/(png|jpg|jpeg)/i;

export const RecipeDescriptionFields = ({ categories }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

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
        {preview ? (
          <img src={preview} alt={'preview'} style={{ objectFit: 'cover' }} />
        ) : (
          <button
            onClick={event => {
              event.preventDefault();
              fileInputRef.current.click();
            }}
          >
            <img src={camera} alt="" />
          </button>
        )}

        <input
          type="file"
          name="image"
          {...register('image')}
          className="upload"
          ref={fileInputRef}
          accept="image/*"
          onChange={event => {
            const file = event.target.files[0];
            if (file && file.type.substr(0, 5) === 'image') {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
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

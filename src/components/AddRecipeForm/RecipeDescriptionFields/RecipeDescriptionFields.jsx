import React, { useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { RecipeDescStyled } from './RecipeDescriptionFields.styled';
import { InputsStyled } from './RecipeDescriptionFields.styled';
import camera from '../../../images/AddRecipe/preview.svg';
import Select from 'react-select';

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
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: '',
      title: '',
      about: '',
      category: 'breakfast',
      time: '40',
    },
  });

  let timeArray = [];

  const timeGenerator = (min, max) => {
    for (let i = min; i <= max; i += 5) {
      timeArray.push(i);
    }
    return timeArray;
  };

  timeGenerator(5, 120);
  const timeOptions = timeGenerator(5, 120).map(item => {
    return {
      value: item.toString(),
      label: `${item} min`,
    };
  });
  // console.log(timeOptions);

  const categoriesOptions = categories.map(option => ({
    id: option.id,
    title: option.title,
    label: option.title,
  }));
  // console.log(categoriesOptions);

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
                width="357"
                height="344"
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
          {' '}
          <span>Enter item title</span>
          <input {...register('title')} />
        </label>
        <label>
          {' '}
          <span>Enter about recipe</span>
          <input {...register('about')} />
        </label>
        {errors.exampleRequired && <span>This field is required</span>}
        <label className="wrapperCategory">
          <span>Category</span>

          <Controller
            name="categories"
            control={control}
            render={({ field }) => (
              <Select {...field} options={categoriesOptions} />
            )}
          />

          {/* <select {...register('category')}>
            {categories.map(item => (
              <option
                key={item.id}
                value={item.title}
                {...register(`${item.title}`)}
              >
                {item.title}
              </option>
            ))}
          </select> */}
        </label>
        <label className="wrapperCategory">
          {' '}
          <span>Cooking time</span>
          <Controller
            name="time"
            control={control}
            render={({ field }) => <Select {...field} options={timeOptions} />}
          />
          {/* <select placeholder="Cooking time" {...register('time')}>
            {timeArray.map(item => (
              <option key={item} value={item} {...register(`${item}`)}>
                {item} min
              </option>
            ))}
          </select> */}
        </label>
      </InputsStyled>
    </RecipeDescStyled>
  );
};

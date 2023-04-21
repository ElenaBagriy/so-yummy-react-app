import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Wrapper,
  RecipeDescStyled,
  RemoveFileBtn,
  StyledImg,
  InputHidden,
  StyledSelect,
} from './RecipeDescriptionFields.styled';
import { InputsStyled } from './RecipeDescriptionFields.styled';
import camera from '../../../images/AddRecipe/preview.svg';
import Select from 'react-select';
import { GrClose } from 'react-icons/gr';

export const RecipeDescriptionFields = ({ categories }) => {
  const [preview, setPreview] = useState(null);

  const imageChange = async e => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const removeFileUpload = () => {
    setPreview(null);
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

  const categoriesOptions = categories.map(option => {
    return { id: option.id, value: option.title, label: option.title };
  });
  // console.log(categoriesOptions);

  return (
    <RecipeDescStyled>
      <Wrapper>
        {' '}
        <label className="imageBox">
          <div width="280" height="270">
            <img
              className="default"
              src={camera}
              alt="preview"
              width="64"
              height="64"
            />
          </div>

          {preview && (
            <div>
              <StyledImg src={preview} width="280" height="270" alt="preview" />
              <RemoveFileBtn onClick={removeFileUpload}>
                <GrClose />
              </RemoveFileBtn>
            </div>
          )}
          <InputHidden
            {...register('image')}
            type="file"
            name="image"
            className="upload"
            accept="image/*,.png, .jpeg,.gif,.web"
            onChange={imageChange}
          />
        </label>
      </Wrapper>

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
              <StyledSelect
                {...field}
                options={categoriesOptions}
                defaultValue={{ value: 'breakfast', label: 'breakfast' }}
                classNamePrefix="custom-select"
                className="сustom-select-container"
                zIndex={110}
              />
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
            render={({ field }) => (
              <StyledSelect
                {...field}
                options={timeOptions}
                classNamePrefix="custom-select"
                className="сustom-select-container"
                defaultValue={{ value: '40', label: '40 min' }}
                zIndex={105}
              />
            )}
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

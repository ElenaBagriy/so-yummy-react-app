import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import {
  Wrapper,
  RecipeDescStyled,
  RemoveFileBtn,
  StyledImg,
  InputHidden,
  // StyledSelect,
} from './RecipeDescriptionFields.styled';
import { InputsStyled } from './RecipeDescriptionFields.styled';
import camera from '../../../images/AddRecipe/preview.svg';
// import Select from 'react-select';
import { GrClose } from 'react-icons/gr';
import { timeGenerator } from 'services/timeGenerator';

export const RecipeDescriptionFields = ({
  register,
  categories,
  control,
}) => {

  const [preview, setPreview] = useState('');

  const imageChange = e => {
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

  const timeOptions = timeGenerator(5, 120);

  const categoriesOptions = categories.map(option => {
    return { id: option.id, value: option.title, label: option.title };
  });

  return (
    <RecipeDescStyled>
      <Wrapper>
        <label
          className="imageBox"
        >
          <div width="279" height="268">
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
            {...register('fullImage', {
              onChange: (e) => imageChange(e)
            })}
            type="file"
            name="fullImage"
            className="upload"
            accept="image/*,.png, .jpeg,.gif,.web"
          />
        </label>
      </Wrapper>

      <InputsStyled>
        <label>
          <span>Enter item title</span>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                onChange={e => field.onChange(e.target.value)}
              />
            )}
          />
        </label>

        <label>
          <span>Enter about recipe</span>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                onChange={e => field.onChange(e.target.value)}
              />
            )}
          />
        </label>
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
        <label className="wrapperCategory">
          <span>Category</span>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="сustom-select-container"
              > 
                {categoriesOptions && categoriesOptions.map(option => {
                  return <option key={option.id} value={option.value}>{option.value}</option>
                })}
                </select>
            )}
          />
        </label>

        <label className="wrapperCategory">
          <span>Cooking time</span>
          <Controller
            name="time"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="сustom-select-container"
              >
                {timeOptions && timeOptions.map(option => {
                  return <option key={option.id} value={option.value}>{option.value}</option>
                })}
              </select>
            )}
          />
        </label>
      </InputsStyled>
    </RecipeDescStyled>
  );
};

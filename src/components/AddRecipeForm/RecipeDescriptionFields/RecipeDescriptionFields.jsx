import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { timeGenerator } from 'services/timeGenerator';
import { onCapitalise } from 'services/onCapitalise';
import camera from '../../../images/AddRecipe/preview.svg';
import {
  ImageLabel,
  RecipeDescStyled,
  RemoveFileBtn,
  StyledImg,
  InputHidden,
  DefaultImage,
  IconClose,
  Error,
  Label,
  Input,
  WrapperCategory,
  PlaceHolder,
  StyledSelect,
  ErrorImageMessage,
  ImageWrapper,
} from './RecipeDescriptionFields.styled';
import { InputsStyled } from './RecipeDescriptionFields.styled';

export const RecipeDescriptionFields = ({
  register,
  categories,
  control,
  errors
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
    return { id: option.id, value: onCapitalise(option.title), label: onCapitalise(option.title) };
  });
  
  return (
    <RecipeDescStyled>
      <ImageLabel>
        {preview ? (
          <ImageWrapper>
            <StyledImg src={preview} width="279" height="268" alt="recipe preview" />
            <RemoveFileBtn onClick={removeFileUpload}>
              <IconClose />
            </RemoveFileBtn>
          </ImageWrapper>) :
          (<div width="279" height="268">
            <DefaultImage
              src={camera}
              alt="set image"
              width="64"
              height="64"
            />
          </div>)
        }
        <InputHidden
          {...register('fullImage', {
            onChange: (e) => imageChange(e)
          })}
          type="file"
          name="fullImage"
          accept="image/*,.png, .jpeg,.gif,.web"
          />
          {errors.fullImage && (
            <ErrorImageMessage>
              {errors.fullImage.message}
            </ErrorImageMessage>
          )}
      </ImageLabel>

      <InputsStyled>
        <Label>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type='text'
                placeholder='Enter item title'
                onChange={e => field.onChange(e.target.value)}
                isError={errors.title}
              />
            )}
          />
          {errors.title && 
            <Error type="input">
            {errors.title.message}
            </Error>
          }
        </Label>

        <Label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type='text'
                placeholder='Enter about recipe'
                onChange={e => field.onChange(e.target.value)}
                isError={errors.description}
              />
            )}
          />
          {errors.description && 
            <Error type="input">
            {errors.description.message}
            </Error>
          }
        </Label>

        <WrapperCategory isError={errors.category}>
          <PlaceHolder>Category</PlaceHolder>
          <Controller
            name="category"
            control={control}
            render={({ field: { onChange, onBlur } }) => (
              <StyledSelect
                classNamePrefix="react-select"
                className="react-select-container"
                isSearchable={false}
                options={categoriesOptions}
                onChange={(e) => {
                  onChange(e.value)
                }}
                onBlur={onBlur}
              />
            )}
          />
          {errors.category &&
            <Error type="select">
              {errors.category.message}
            </Error>
          }
        </WrapperCategory>

        <WrapperCategory isError={errors.time}>
          <PlaceHolder>Cooking time</PlaceHolder>
          <Controller
            name="time"
            control={control}
            render={({ field: { onChange, onBlur } }) => {
              return <StyledSelect
                classNamePrefix="react-select"
                className="react-select-container"
                isSearchable={false}
                options={timeOptions}
                onChange={(e) => onChange(e.value.slice(0, -4))}
                onBlur={onBlur}
              />
            }}
          />
          {errors.time &&
            <Error type="select">
              {errors.time.message}
            </Error>
          }
        </WrapperCategory>

      </InputsStyled>
    </RecipeDescStyled>
  );
};

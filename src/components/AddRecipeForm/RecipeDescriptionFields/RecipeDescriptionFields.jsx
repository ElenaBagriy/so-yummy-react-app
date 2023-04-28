import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
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
} from './RecipeDescriptionFields.styled';
import { InputsStyled } from './RecipeDescriptionFields.styled';
import camera from '../../../images/AddRecipe/preview.svg';
import { timeGenerator } from 'services/timeGenerator';
import { onCapitalise } from 'services/onCapitalise';

export const RecipeDescriptionFields = ({
  register,
  categories,
  control,
  errors,
  setValue
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
          <div>
            <StyledImg src={preview} width="279" height="268" alt="recipe preview" />
            <RemoveFileBtn onClick={removeFileUpload}>
              <IconClose />
            </RemoveFileBtn>
          </div>) :
          (<div width="279" height="268">
            <DefaultImage
              src={camera}
              alt="set image"
              width="64"
              height="64"
            />
          </div>)
        }
        {errors.fullImage && (
          <Error name="fullImage">
            {errors.fullImage}
          </Error>
        )}
        <InputHidden
          {...register('fullImage', {
            onChange: (e) => imageChange(e)
          })}
          type="file"
          name="fullImage"
          accept="image/*,.png, .jpeg,.gif,.web"
        />
      </ImageLabel>

      <InputsStyled>
        <Label>
          {/* <span>Enter item title</span> */}
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
            <Error errors={errors} name="title"/>
        </Label>

        <Label>
          {/* <span>Enter about recipe</span> */}
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type='text'
                placeholder='Enter about recipe'
                onChange={e => field.onChange(e.target.value)}
              />
            )}
          />
          <Error errors={errors} name="description"/>
        </Label>

        {/* {errors.exampleRequired && <span>This field is required</span>} */}

        <WrapperCategory>
          <PlaceHolder>Category</PlaceHolder>
          <Controller
            name="category"
            control={control}
            render={({ field, form }) => (
              <StyledSelect
                {...field}
                defaultValue={categoriesOptions[0]}
                placeholder={categoriesOptions[0]?.value}
                classNamePrefix="react-select"
                className="react-select-container"
                // isLoading={false}
                isSearchable={false}
                options={categoriesOptions}
                // onChange={option => setValue(field.name, option.value)}
              />
            )}
          />
        </WrapperCategory>

        <WrapperCategory>
          <PlaceHolder>Cooking time</PlaceHolder>
          <Controller
            name="time"
            control={control}
            render={({ field }) => (

              <StyledSelect
                {...field}
                defaultValue={timeOptions[0]}
                placeholder={timeOptions[0]?.value}
                classNamePrefix="react-select"
                className="react-select-container"
                // isLoading={false}
                isSearchable={false}
                options={timeOptions}
                // onChange={option => setValue(field.name, option.value)}
              />
            )}
          />
        </WrapperCategory>

      </InputsStyled>
    </RecipeDescStyled>
  );
};

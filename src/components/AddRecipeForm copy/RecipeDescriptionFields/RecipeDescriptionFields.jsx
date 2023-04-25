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
// import Select from 'react-select';
import { GrClose } from 'react-icons/gr';
import { useFormikContext } from 'formik';

export const RecipeDescriptionFields = ({
  categories,
  selectedImgFile,
  handleCategoryInputChange,
  handleTimeInputChange,
  categoryValue,
  timeValue,
}) => {

  const [preview, setPreview] = useState(null);
  const { errors, touched, setFieldValue } = useFormikContext();

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
            type="file"
            name="image"
            className="upload"
            accept="image/*,.png, .jpeg,.gif,.web"
            value={selectedImgFile}
            onChange={imageChange}
          />
        </label>
      </Wrapper>

      <InputsStyled>
        <label>
          <span>Enter item title</span>
          <Controller
            name="title"
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
            name="about"
            render={({ field }) => (
              <input
                {...field}
                onChange={e => field.onChange(e.target.value)}
              />
            )}
          />
        </label>
        {errors.exampleRequired && <span>This field is required</span>}
        <label className="wrapperCategory">
          <span>Category</span>
          <Controller
            name="categories"
            render={({ field }) => (
              <StyledSelect
                {...field}
                options={categoriesOptions}
                defaultValue={{ value: 'breakfast', label: 'breakfast' }}
                classNamePrefix="custom-select"
                className="сustom-select-container"
                zIndex={110}
                // value={categoryValue}
                // onChange={e => {
                //   handleCategoryInputChange(e.value);
                //   console.log(e.value);
                // }}
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
            render={({ field }) => (
              <StyledSelect
                {...field}
                options={timeOptions}
                classNamePrefix="custom-select"
                className="сustom-select-container"
                defaultValue={{ value: '40', label: '40 min' }}
                zIndex={105}
                // value={timeValue}
                // onChange={e => {
                //   handleTimeInputChange(e.value);
                //   console.log(e.value);
                // }}
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

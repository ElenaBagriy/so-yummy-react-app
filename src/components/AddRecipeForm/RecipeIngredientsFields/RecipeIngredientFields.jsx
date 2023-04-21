import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { IconButton, Tooltip } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import {
  IngredFieldsStyled,
  Label,
  MeasureLabel,
  RecipeIngredStyled,
  StyledSelect,
} from './RecipeIngredientFields.styled';
import Select from 'react-select';

export const RecipeIngredientsFields = ({ ingredients }) => {
  const { register, control } = useForm({
    defaultValues: {
      ingredients: [],
      amount: 0,
      measure: null,
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: 'ingredients',
    control,
    defaultValues: ingredients,
  });

  const deleteField = index => {
    if (!fields.length) return;
    remove(index);
  };

  const [numberOfFields, setNumberOfFields] = useState(fields.length);

  const measurement = ['tbs', 'tsp', 'kg', 'g', 'l', 'ml', 'lbs', 'oz'];
  const selectMeasure = measurement.map(measure => {
    return {
      value: measure,
      label: measure,
    };
  });
  // console.log(selectMeasure);

  const selectIngredients = ingredients.map(option => {
    return {
      id: option.id,
      value: option.ttl,
      label: option.ttl,
    };
  });

  useEffect(() => {
    setNumberOfFields(fields.length);
  }, [fields]);

  return (
    <>
      <RecipeIngredStyled>
        <div>
          <h3>Ingredients</h3>
        </div>
        <div className="counterWrapper">
          <Tooltip title="Remove one field">
            <button
              onClick={e => {
                e.preventDefault();
                deleteField(fields.length - 1);
              }}
            >
              -
            </button>
          </Tooltip>
          <span className="counter">
            {numberOfFields > 0 ? numberOfFields : 0}
          </span>
          <Tooltip title="Add one field">
            <span>
              <button
                onClick={e => {
                  e.preventDefault();
                  append({});
                }}
              >
                +
              </button>
            </span>
          </Tooltip>
        </div>
      </RecipeIngredStyled>
      {fields.map(({ id }, index) => {
        return (
          <IngredFieldsStyled key={id}>
            <label>
              <Controller
                name={`ingredients.${index}.ingredients`}
                control={control}
                render={({ field }) => (
                  <StyledSelect
                    {...field}
                    options={selectIngredients}
                    classNamePrefix="custom-select"
                    className="сustom-select-container second"
                    placeholder="Choose an ingredient..."
                    onChange={e => {
                      console.log(e.value);
                    }}
                  />
                )}
              />
            </label>

            <label>
              <Controller
                className="amountField"
                name={`ingredients.${index}.amount`}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    onChange={e => {
                      console.log(e.target.value);
                    }}
                  />
                )}
              />
            </label>
            <MeasureLabel>
              <Controller
                name={`ingredients.${index}.measure`}
                control={control}
                render={({ field }) => (
                  <StyledSelect
                    {...field}
                    options={selectMeasure}
                    classNamePrefix="custom-select"
                    className="сustom-select-container"
                    onChange={e => {
                      console.log(e.value);
                    }}
                  />
                )}
              />
            </MeasureLabel>

            <Tooltip title="Delete field" className="deleteBtn">
              <IconButton
                onClick={e => {
                  e.preventDefault();
                  remove(index);
                }}
              >
                <ClearIcon />
              </IconButton>
            </Tooltip>
          </IngredFieldsStyled>
        );
      })}

      {/* {fields.map(({ id, name, amount, measure }, index) => {
        return (
          <IngredFieldsStyled key={id}>
            <label>
              <select
                {...register(`ingredients.${index}.ingredients`)}
                defaultValue={name}
                className="selectIngredients"
              >
                <option value="Select ingredients">Select ingredients</option>
                {ingredients?.map(item => (
                  <option key={item._id} value={item.ttl}>
                    {item.ttl}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <input
                type="number"
                min="0"
                {...register(`ingredients.${index}.amount`)}
                defaultValue={amount}
                className="numberInput"
              />
              <select
                {...register(`ingredients.${index}.measure`)}
                defaultValue={measure}
                className="measureSelect"
              >
                {measurement?.map(item => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <Tooltip title="Delete field" className="deleteBtn">
              <IconButton
                onClick={() => {
                  deleteField(index);
                }}
              >
                <ClearIcon />
              </IconButton>
            </Tooltip>
          </IngredFieldsStyled>
        );
      })} */}
    </>
  );
};

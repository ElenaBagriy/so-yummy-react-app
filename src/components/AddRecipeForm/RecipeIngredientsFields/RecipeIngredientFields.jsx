import React, { useEffect, useState } from 'react';
import { useFieldArray } from 'react-hook-form';
import { IconButton, Tooltip } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import {
  IngredFieldsStyled,
  RecipeIngredStyled,
} from './RecipeIngredientFields.styled';

export const RecipeIngredientsFields = ({
  ingredients,
  register,
  control,
  watch,
}) => {

  const { fields, append, remove } = useFieldArray({
    name: 'ingredients',
    control,
    defaultValues: ingredients,
  });

  const watchFieldArray = watch("ingredients");

  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index]
    };
    });
  
  const deleteField = index => {
    if (!fields.length) return;
    remove(index);
  };

  const [numberOfFields, setNumberOfFields] = useState(fields.length);

  const measurement = ['tbs', 'tsp', 'kg', 'g', 'l', 'ml', 'lbs', 'oz'];

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
      

      {controlledFields.map((field, index) => {
        return (
          <IngredFieldsStyled key={field.id}>
            <label>
              <select
                {...field}
                {...register(`ingredients.${index}._id`)}
                className="сustom-select-container"
              >
                {ingredients && ingredients.map(ingredient => {
                  return <option key={ingredient._id} value={ingredient._id}>{ingredient.ttl}</option>
                })}
              </select>
            </label>

            <label>
              <input {...register(`ingredients.${index}.measure[0]`)}/>
              <select
                {...field}
                {...register(`ingredients.${index}.measure[1]`)}
                className="сustom-select-container"
              >
                {measurement && measurement.map(measure => {
                  return <option key={measure} value={measure}>{measure}</option>
                })}
              </select>
            </label>


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

    </>
  );
};

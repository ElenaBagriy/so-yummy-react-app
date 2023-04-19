import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { IconButton, Tooltip } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  IngredFieldsStyled,
  RecipeIngredStyled,
} from './RecipeIngredientsFields.styled';

export const RecipeIngredientsFields = ({ ingredients }) => {
  const {
    register,
    control,
    // formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: 'ingredients',
    control,
  });

  const deleteField = index => {
    if (!numberOfFields) return;
    setNumberOfFields(prevState => (prevState > 0 ? prevState - 1 : prevState));
    remove(index);
  };

  const [numberOfFields, setNumberOfFields] = useState(0);
  const measurement = ['tbs', 'tsp', 'kg', 'g', 'l', 'ml', 'lbs', 'oz'];
  // const selectOptions = ingredients.map(option => {
  //   return {
  //     id: option._id,
  //     value: option.ttl,
  //     label: option.ttl,
  //   };
  // });

  return (
    <>
      <RecipeIngredStyled>
        <div>
          <h3>Ingredients</h3>
        </div>
        <div className="counterWrapper">
          <Tooltip title="Remove one field">
            <button onClick={index => deleteField(index)}>
              -{/* <RemoveIcon /> */}
            </button>
          </Tooltip>

          <span className="counter">
            {numberOfFields > 0 ? numberOfFields : 0}
          </span>
          <Tooltip title="Add one field">
            <span>
              <button
                onClick={() => {
                  setNumberOfFields(prevState => prevState + 1);
                  append({});
                }}
              >
                {' '}
                +{/* <AddIcon /> */}
              </button>
            </span>
          </Tooltip>
        </div>
      </RecipeIngredStyled>

      {fields.map(({ id, name, amount, measure }, index) => {
        return (
          <>
            <IngredFieldsStyled key={id}>
              <label>
                <select
                  {...register('ingredients')}
                  name={`ingredients[${index}].name`}
                  defaultValue={name}
                  className="selectIngredients"
                >
                  {/* <option value="" name={`ingredients[${index}].default`}></option> */}
                  {ingredients?.map((item, index) => (
                    <option
                      key={item._id}
                      value={item.ttl}
                      name={`ingredients[${index}].name`}
                      {...register(`${item.ttl}`)}
                    >
                      {item.ttl}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <input
                  type="number"
                  min="0"
                  {...register('amount')}
                  name={`ingredients[${index}].amount`}
                  defaultValue={amount}
                  className="numberInput"
                />

                <select
                  {...register('measure')}
                  name={`ingredients[${index}].measure`}
                  defaultValue={measure}
                  className="measureSelect"
                >
                  {measurement?.map((item, index) => (
                    <option
                      key={item}
                      value={item}
                      name={`ingredients[${index}].unit`}
                      {...register(`${item}`)}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <Tooltip title="Delete field" className="deleteBtn">
                <IconButton
                  onClick={index => {
                    deleteField(index);
                  }}
                >
                  <ClearIcon />
                </IconButton>
              </Tooltip>
            </IngredFieldsStyled>
          </>
        );
      })}
    </>
  );
};

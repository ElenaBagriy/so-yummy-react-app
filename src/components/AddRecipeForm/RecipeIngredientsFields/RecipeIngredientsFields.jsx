import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { IconButton, Tooltip } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// import Select from 'react-select';

export const RecipeIngredientsFields = ({ ingredients }) => {
  const {
    register,
    control,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      ingredients: { name: 'Chicken', amount: 0, measure: 'tbs' },
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'ingredients',
    control,
  });

  const addField = data => {
    setNumberOfFields(prevState => prevState + 1);
    append(data);
  };

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
      <div>
        <h3>Ingredients</h3>
        <div>
          <Tooltip title="Remove one field">
            <IconButton onClick={index => deleteField(index)}>
              <RemoveIcon />
            </IconButton>
          </Tooltip>

          <span>{numberOfFields > 0 ? numberOfFields : 0}</span>
          <Tooltip title="Add one field">
            <span>
              <IconButton onClick={() => addField()}>
                <AddIcon />
              </IconButton>
            </span>
          </Tooltip>
        </div>
      </div>

      {fields.map((field, index) => {
        return (
          <div key={field.id}>
            <select
              name={`ingredients.${index}.name`}
              {...register('ingredients')}
            >
              <option value="" name={`ingredients.${index}.default`}></option>
              {ingredients?.map(item => (
                <option
                  key={item._id}
                  value={item.ttl}
                  name={`ingredients.${index}.name`}
                >
                  {item.ttl}
                </option>
              ))}
            </select>

            <label>
              <input
                type="number"
                {...register('amount')}
                name={`ingredients.${index}.amount`}
              />

              <select
                {...register('measure')}
                name={`ingredients.${index}.measure`}
              >
                {measurement?.map((item, index) => (
                  <option
                    key={item}
                    value={item}
                    name={`ingredients.${index}.unit`}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <Tooltip title="Delete field">
              <IconButton
                onClick={index => {
                  deleteField(index);
                }}
              >
                <ClearIcon />
              </IconButton>
            </Tooltip>
          </div>
        );
      })}
    </>
  );
};

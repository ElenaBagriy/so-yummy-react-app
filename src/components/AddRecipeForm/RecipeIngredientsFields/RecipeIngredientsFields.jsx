import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IconButton, Tooltip } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const RecipeIngredientsFields = ({ ingredients }) => {
  const {
    register,
    // control,
    // reset,
    // handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: 'test',
  // });

  // const allIngredients = ingredients.ingredients;
  // console.log(allIngredients);

  const addField = () => {
    setNumberOfFields(prevState => (prevState > 0 ? prevState - 1 : prevState));
  };

  const deleteField = () => {
    setNumberOfFields(prevState => prevState + 1);
  };

  // const onSubmit = data => console.log(data);
  const [numberOfFields, setNumberOfFields] = useState(1);
  const measurement = ['tbs', 'tsp', 'kg', 'g', 'l', 'ml', 'lbs', 'oz'];

  return (
    <>
      <div>
        <h3>Ingredients</h3>
        <div>
          <Tooltip title="Remove one field">
            {/* <span> */}
            <IconButton onClick={deleteField}>
              <RemoveIcon />
            </IconButton>
            {/* </span> */}
          </Tooltip>

          <span>{numberOfFields}</span>
          <Tooltip title="Add one field">
            <span>
              <IconButton onClick={addField}>
                <AddIcon />
              </IconButton>
            </span>
          </Tooltip>
        </div>
      </div>
      <select name="ingredients" {...register('ingredients')}>
        {ingredients?.map(item => (
          <option key={item._id} value={item.ttl}>
            {item.ttl}
          </option>
        ))}
      </select>
      <label>
        <input type="number" {...register('number')} />

        <select name="measurement" {...register('measurement')}>
          {measurement.map((item, index) => (
            <option key={item} value={index}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <Tooltip title="Delete field">
        <span>
          <IconButton onClick={() => {}}>
            <ClearIcon />
          </IconButton>
        </span>
      </Tooltip>
    </>
  );
};

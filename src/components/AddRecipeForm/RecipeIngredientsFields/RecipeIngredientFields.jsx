import React, { useEffect, useState } from 'react';
import { Controller, useFieldArray } from 'react-hook-form';
import { Tooltip } from '@mui/material';
import {
  CountButton,
  Counter,
  CounterValue,
  DeleteButton,
  DeleteIcon,
  FieldsList,
  Icon,
  IngredFieldsStyled,
  IngredientLabel,
  Input,
  Labels,
  MeasureLabel,
  RecipeIngredStyled,
  StyledMeasureSelect,
  StyledSelect,
  Title,
  Wrapper,
} from './RecipeIngredientFields.styled';
import SVG from '../../../images/svg/sprite.svg';
import { nanoid } from '@reduxjs/toolkit';


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

  const ingredientsOptions = ingredients.map(option => {
    return { id: option._id, value: option.ttl, label: option.ttl };
  });

  const measureOptions = measurement.map(option => {
    return { id: nanoid(), value: option, label: option };
  });

  useEffect(() => {
    setNumberOfFields(fields.length);
  }, [fields]);

  return (
    <Wrapper>
      <RecipeIngredStyled>
          <Title>Ingredients</Title>
        <Counter>
          <Tooltip title="Remove one field">
            <span>
            <CountButton
              disabled={numberOfFields === 0}
              onClick={e => {
                console.log('clis');
                e.preventDefault();
                deleteField(fields.length - 1);
              }}
            >
              <Icon>
                <use href={`${SVG}#icon-decrement`}/>
              </Icon>
              </CountButton>
              </span>
          </Tooltip>
          <CounterValue>
            {numberOfFields > 0 ? numberOfFields : 0}
          </CounterValue>
          <Tooltip title="Add one field">
            <CountButton
              disabled={false}
              onClick={e => {
                e.preventDefault();
                append({});
              }}
            >
              <Icon>
                <use href={`${SVG}#icon-increment`}/>
              </Icon>
            </CountButton>
          </Tooltip>
        </Counter>
      </RecipeIngredStyled>

      <FieldsList>
        {controlledFields.map((field, index) => {
          return (
            <IngredFieldsStyled key={field.id}>
              <Labels>
                <IngredientLabel>
                    <Controller
                      name={`ingredients.${index}._id`}
                      control={control}
                      render={({ field }) => (
                        <StyledSelect
                          {...field}
                          value={ingredientsOptions.find(
                            option => option.value === field.value
                          )}
                          defaultValue={ingredientsOptions[0]}
                          placeholder={'Type ingredient name'}
                          classNamePrefix="ingr-select"
                          className="ingr-select-container"
                          // isLoading={false}
                          isSearchable={true}
                          options={ingredientsOptions}
                        // onChange={option => setValue(field.name, option.value)}
                        />
                      )}
                    />
                </IngredientLabel>

                <MeasureLabel>
                  <Input {...register(`ingredients.${index}.measure[0]`)} />
                  <Controller
                      name={`ingredients.${index}.measure[1]`}
                      control={control}
                      render={({ field }) => (
                  <StyledMeasureSelect
                    defaultValue=''
                    placeholder={measureOptions[0]?.value}
                    classNamePrefix="measure-select"
                    className="measure-select-container"
                    // isLoading={false}
                    isSearchable={false}
                    options={measureOptions}
                    // value={measureOptions.find(
                    //   option => option.value === field.value
                    // )}
                    {...field}
                    // {...register(`ingredients.${index}.measure[1]`)}
                  >
                        </StyledMeasureSelect>
                        )}
                    />
                </MeasureLabel>
              </Labels>

              <Tooltip title="Delete field" className="deleteBtn">
                <DeleteButton
                  onClick={e => {
                    e.preventDefault();
                    remove(index);
                  }}
                >
                  <DeleteIcon>
                    <use href={`${SVG}#icon-x`} />
                  </DeleteIcon>
                </DeleteButton>
              </Tooltip>
            </IngredFieldsStyled>
          );
        })}
      </FieldsList>
    </Wrapper>
  );
};

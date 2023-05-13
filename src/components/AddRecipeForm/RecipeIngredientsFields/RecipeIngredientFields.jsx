import React, { useEffect, useState } from 'react';
import { Controller, useFieldArray } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Tooltip } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import SVG from '../../../images/svg/sprite.svg';
import {
  CountButton,
  Counter,
  CounterValue,
  DeleteButton,
  DeleteIcon,
  Error,
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


export const RecipeIngredientsFields = ({
  ingredients,
  register,
  control,
  watch,
  errors
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
                  e.preventDefault();
                  deleteField(fields.length - 1);
                }}
              >
                <Icon>
                  <use href={`${SVG}#icon-decrement`} />
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
                    render={({ field: { onChange, onBlur, value },
                    }) => {
                      return <StyledSelect
                        classNamePrefix="ingr-select"
                        className="ingr-select-container"
                        isSearchable={true}
                        options={ingredientsOptions}
                        selected={value}
                        onChange={(e) => onChange(e.id)}
                        onBlur={onBlur}
                      />
                    }}
                  />
                  <ErrorMessage
                    errors={errors}
                    name={`ingredients.${index}._id`}
                    render={({ message }) => <Error>{message}</Error>}
                  />
                </IngredientLabel>
                <MeasureLabel>
                  <Input
                    autoFocus={false}
                    autoComplete='false'
                    min="0"
                    type="number"
                    {...register(`ingredients.${index}.quantity`)} />
                  <Controller
                    name={`ingredients.${index}.measure`}
                    control={control}
                    defaultValue={measurement[0]}
                    render={({ field: { onChange, onBlur, value } }) => {
                      return <StyledMeasureSelect
                        placeholder={value}
                        classNamePrefix="measure-select"
                        className="measure-select-container"
                        selected={value}
                        isSearchable={false}
                        options={measureOptions}
                        value={value}
                        onChange={(e) => {
                          onChange(e.value)
                        }}
                        onBlur={onBlur}
                      />
                    }}
                  />
                  <ErrorMessage
                    errors={errors}
                    name={`ingredients.${index}.measure`}
                    render={({ message }) => <Error>{message}</Error>}
                  />
                  <ErrorMessage
                    errors={errors}
                    name={`ingredients.${index}.quantity`}
                    render={({ message }) => <Error>{message}</Error>}
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
          )
        })}
      </FieldsList>
    </Wrapper>
  );
};

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  getAllCategories,
  getIngredients,
} from 'redux/recipes/recipesOperations';
import { selectCategoryList, selectIngredients } from 'redux/selectors';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';
import { StyledAddRecipeContainer } from './AddRecipeForm.styled';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientFields';

export const AddRecipeForm = () => {
  const [categoryValue, setCategoryValue] = useState('Breakfast');
  const [timeValue, setTimeValue] = useState('5 min');
  // const [selectedImgFile, setSelectedImgFile] = useState();
  const [ingredientsValue, setIngredientsValue] = useState([]);
  const [amountValue, setAmountValue] = useState(0);
  const [measureValue, setMeasureValue] = useState('tbs');

  const handleCategoryInputChange = value => {
    setCategoryValue(value);
  };
  const handleTimeInputChange = value => {
    setTimeValue(value);
  };

  const handleIngredientsValueChange = value => {
    setIngredientsValue(value);
  };
  const handleAmountInputChange = value => {
    setAmountValue(value);
  };
  const handleMeasureInputChange = value => {
    setMeasureValue(value);
  };

  const {
    handleSubmit,
    //   register,
    //   watch,
    // formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      image: '',
      title: '',
      about: '',
      category: 'breakfast',
      time: '40',
      ingredients: [],
      amount: 0,
      measure: 'tbs',
      preparation: [],
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    const descFieldsValues = {
      ...data,
      category: categoryValue,
      time: timeValue,
      // image: selectedImgFile,
    };
    console.log(descFieldsValues);

    console.log('data', data);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getIngredients());
  }, [dispatch]);

  const categories = useSelector(selectCategoryList);
  // console.log(categories);

  const ingredients = useSelector(selectIngredients);
  // console.log(ingredients);

  return (
    <StyledAddRecipeContainer>
      <form onSubmit={() => handleSubmit(onSubmit)}>
        <RecipeDescriptionFields
          categories={categories}
          // selectedImgFile={selectedImgFile}
          handleCategoryInputChange={handleCategoryInputChange}
          handleTimeInputChange={handleTimeInputChange}
          categoryValue={categoryValue}
          timeValue={timeValue}
        />
        <RecipeIngredientsFields
          ingredients={ingredients}
          ingredientsValue={ingredientsValue}
          amountValue={amountValue}
          measureValue={measureValue}
          handleIngredientsValueChange={handleIngredientsValueChange}
          handleAmountInputChange={handleAmountInputChange}
          handleMeasureInputChange={handleMeasureInputChange}
        />
        <RecipePreparationFields />
        <button type="submit" className="submitBtn">
          Add
        </button>
      </form>
    </StyledAddRecipeContainer>
  );
};

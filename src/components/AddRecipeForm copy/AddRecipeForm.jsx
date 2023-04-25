import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategories,
  getIngredients,
} from 'redux/recipes/recipesOperations';
import { selectCategoryList, selectIngredients } from 'redux/selectors';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { Form, Formik } from 'formik';
import { addOwnRecipe } from 'redux/ownRecipes/ownRecipesOperations';
import { useNavigate } from 'react-router-dom';

export const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(selectCategoryList);
  const ingredients = useSelector(selectIngredients);

  const onSubmit = (values) => {
    const recipe = {
      ...values,
      ingredients: JSON.stringify(
        values.ingredients.map(({ id, quantity, measure }) => {
          return {
            id,
            measure: quantity + measure,
          };
        })
      ),
    };
    const formData = new FormData();

    Object.keys(recipe).forEach(key => {
      formData.append(key, recipe[key]);
    });

    dispatch(addOwnRecipe(formData))
      .unwrap()
      .then(res => navigate('/my'));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getIngredients());
  }, [dispatch]);


  return (
    <Formik
      initialValues={{
        image: '',
        title: '',
        about: '',
        category: '',
        time: '',
        ingredients: [],
        preparation: [],
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <RecipeDescriptionFields/>
        <button type="submit" className="submitBtn">
          Add
        </button>
      </Form>
    </Formik>
  );
};

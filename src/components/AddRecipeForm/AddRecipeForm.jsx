import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getAllCategories, getIngredients } from 'redux/recipes/recipesOperations';
import { selectCategoryList, selectIngredients } from 'redux/selectors';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';
import { SubmitButton } from './AddRecipeForm.styled';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientFields';
import { addOwnRecipe } from 'redux/ownRecipes/ownRecipesOperations';
import { useNavigate } from 'react-router-dom';

export const AddRecipeForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoryList);
  const ingredients = useSelector(selectIngredients);

  const {
    handleSubmit,
    register,
    control,
    watch,
    setValue,
    formState: { errors,
      // isDirty, isValid
    },
  } = useForm({
    defaultValues: {
      fullImage: '',
      title: '',
      description: '',
      category: 'breakfast',
      time: '40',
      ingredients: [],
      instructions: [],
    },
  });

  const onSubmit = data => {
    const { fullImage, title, description, category, time, ingredients, instructions } = data;
    const recipe = {
      fullImage: fullImage[0],
      title,
      description,
      category: category.value,
      time: time.value.slice(0,-4),
      instructions: instructions.split('\n').join(', '),
      ingredients:
        JSON.stringify(
        ingredients.map(({ _id, measure }) => {
          return {
            id: _id.id,
            measure: measure[0] + measure[1].value,
          };
        })
      ),
    };

    console.log(recipe);
    const formData = new FormData();
    Object.keys(recipe).forEach(key => {
          formData.append(key, recipe[key]);
        });
    
    dispatch(addOwnRecipe(formData))
      .unwrap()
      .then(res => navigate('/my'));
  };


  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getIngredients());
  }, [dispatch]);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RecipeDescriptionFields
        errors={errors}
        register={register}
        categories={categories}
        control={control}
        setValue={setValue}
      />
      <RecipeIngredientsFields
        register={register}
        control={control}
        ingredients={ingredients}
        watch={watch}
      />
      <RecipePreparationFields
        register={register}
        control={control}
      />
      <SubmitButton type="submit" className="submitBtn">
        Add
      </SubmitButton>
    </form>
  );
};

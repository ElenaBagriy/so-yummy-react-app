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
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


  const validationSchema = Yup.object({
    // fullImage: Yup.mixed()
    //   .test('required', "Required", value => value && value.length)
    //   .test("fileSize", "The file is too large", (value, context) => {
    //     return value && value[0] && value[0].size <= 41943040;
    //   })
    //   .test(
    //     'fileType',
    //     'Only image files are allowed',
    //     value => value =>
    //       !value ||
    //       ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
    //   ),
    // title: Yup.string().required('Required'),
    // description: Yup.string().required('Required'),
    // category: Yup.string().required('Required'),
    // time: Yup.string().required('Required'),
    // ingredients: Yup.array().of(Yup.object({
    //   _id: Yup.string().required('Required'),
    //   measure: Yup.string().required('Required'),
    //   quantity: Yup.number('Required').typeError('Required').positive('Not positive').required('Required')
    // })).required(),
    instructions: Yup.string().required('Required'),
  });

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
    formState: { errors
      // isDirty, isValid
    },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullImage: '',
      title: '',
      description: '',
      category: '',
      time: '',
      ingredients: [],
      instructions: [],
    },
  });

  const onSubmit = data => {
    const { fullImage, ingredients, instructions } = data;
    const recipe = {
      ...data,
      fullImage: fullImage[0],
      instructions: instructions.split('\n').join(', '),
      ingredients:
      //   JSON.stringify(
        ingredients.map(({ _id, measure, quantity }) => {
          return {
            id: _id,
            measure: quantity + measure,
          };
        })
      // ),
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
      />
      <RecipeIngredientsFields
        errors={errors}
        register={register}
        control={control}
        ingredients={ingredients}
        watch={watch}
      />
      <RecipePreparationFields
        register={register}
        control={control}
        errors={errors}
      />
      <SubmitButton type="submit" className="submitBtn">
        Add
      </SubmitButton>
    </form>
  );
};

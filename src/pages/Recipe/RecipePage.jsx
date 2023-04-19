import RecipeInngredientsList from "components/Recipe/RecipeInngredientsList/RecipeInngredientsList";
import RecipePageHero from "components/Recipe/RecipePageHero/RecipePageHero";
import RecipePreparation from "components/Recipe/RecipePreparation/RecipePreparation";
import RecipeSkeleton from "components/Recipe/RecipeSkeleton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getRecipeById, getRecipesFavorite } from "redux/recipes/recipesOperations";
import {
  // getRecipes, //test
  selectRecipe,
  selectRecipeLoading,
  selectUserFavoritesIsLoading,
} from "redux/recipes/recipesSelector";
import { fetchShoppingList } from "redux/shoplist/shoplistOperation";
import { selectIsLoading } from "redux/shoplist/shoplistSelectors";

const RecipePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {page} = useState(1);
  const {
    description,
    ingredients,
    instructions,
    previewImg,
    time,
    title,
    _id,
  } = useSelector(selectRecipe);

  useEffect(() => {
    dispatch(fetchShoppingList());
    dispatch(getRecipeById(id));
    dispatch(getRecipesFavorite({page}));
  }, [dispatch, id]);

  const isLoadingShopping = useSelector(selectIsLoading);
  const isLoading = useSelector(selectRecipeLoading);
  const favoriteIsLoading = useSelector(selectUserFavoritesIsLoading);

  return (
    <>
      {isLoadingShopping || isLoading || favoriteIsLoading ? (
        <RecipeSkeleton />
      ) : (
        <>
          <RecipePageHero
            title={title}
            description={description}
            time={time}
            id={_id}
          />
          <RecipeInngredientsList ingredients={ingredients} recipeId={_id} />
          <RecipePreparation
            preview={previewImg}
            title={title}
            instructions={instructions}
          />
        </>
      )}
    </>
  );
};

export default RecipePage;

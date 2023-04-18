// import {Recipes} from "components/Recipe/Recipe";

// const RecipePage = () => {
//   return (
//     <>
//       <Recipes></Recipes>
//     </>
//   );
// };

// export default RecipePage;


import RecipeInngredientsList from "components/Recipe/RecipeInngredientsList/RecipeInngredientsList";
import RecipePageHero from "components/Recipe/RecipePageHero/RecipePageHero";
import RecipePreparation from "components/Recipe/RecipePreparation/RecipePreparation";
import RecipeSkeleton from "components/Recipe/RecipeSkeleton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getRecipeById, getRecipesFavorite } from "redux/recipes/recipesOperations";
import {
  // selectRecipe
  getRecipes,
  selectRecipeLoading,
  selectUserFavoritesIsLoading,
} from "redux/recipes/recipesSelector";
import { fetchShoppingList } from "redux/shoplist/shoplistOperation";
import { selectIsLoading } from "redux/shoplist/shoplistSelectors";

const RecipePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    // area,
    // category,
    // createdAt,
    description,
    // favorites,
    ingredients,
    instructions,
    // likes,
    // popularity,
    preview,
    // tags,
    // thumb,
    time,
    title,
    // updatedAt,
    // youtube,
    _id,
  } = useSelector(getRecipes);

  useEffect(() => {
    dispatch(fetchShoppingList());
    dispatch(getRecipeById(id));
    dispatch(getRecipesFavorite);
  }, [dispatch, id]);

  const isLoading = useSelector(selectRecipeLoading);
  const isLoadingShopping = useSelector(selectIsLoading);
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
            preview={preview}
            title={title}
            instructions={instructions}
          />
        </>
      )}
    </>
  );
};

export default RecipePage;

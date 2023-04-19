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
import { useEffect, useState } from "react";
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
  const [page, setPage] = useState(1);
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
    dispatch(fetchShoppingList()); //returns []
    dispatch(getRecipeById(id)); //OK
    dispatch(getRecipesFavorite({page})); //OK
  }, [dispatch, id]);

  console.log('title', title, 'description', description, 'time', time, '_id', _id);

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

import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RecipeIngredientsList } from "../../components/Recipe/RecipeIngredientsList/RecipeIngredientsList";
import { RecipePageHero } from "../../components/Recipe/RecipePageHero/RecipePageHero";
import { RecipePreparation } from "../../components/Recipe/RecipePreparation/RecipePreparation";
import { RecipeSkeleton } from "../../components/Recipe/RecipeSceleton";
import {
  getRecipeById,
  // getRecipesFavorite      //проверить
} from "redux/recipes/recipesOperations";
import {
  selectChoosedRecipe,
  selectLoadingRecipes,
  // selectUserFavoritesIsLoading,
} from "../../redux/selectors";
import { fetchShoppingList } from "redux/shoplist/shoplistOperation";
import { selectShoppingIsLoading } from "../../redux/selectors";

const RecipePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const {page} = useState(1);
  const {
    description,
    ingredients,    //в документации ingridients
    instructions,
    previewImg,
    time,
    title,
    _id,
    favorite,
    tags
  } = useSelector(selectChoosedRecipe);

  useEffect(() => {
    dispatch(fetchShoppingList());
    dispatch(getRecipeById(id));
    // dispatch(getRecipesFavorite({page}));    // getRecipesFavorite      //проверить
  }, [dispatch, id]);
    
  const isLoadingShoppingList = useSelector(selectShoppingIsLoading);
  const isLoading = useSelector(selectLoadingRecipes);

  return (
    <>
      {isLoadingShoppingList || isLoading  ? (
        <RecipeSkeleton />
      ) : (
        <>
            <RecipePageHero
              title={title}
              description={description}
              time={time}
              id={_id}
              favorite={favorite}
          />
          <RecipeIngredientsList ingredients={ingredients} recipeId={_id} />
            <RecipePreparation
              preview={previewImg}
              title={title}
              instructions={instructions}
              tags={tags}
          />
        </>
      )}
    </>
  );
};

export default RecipePage;
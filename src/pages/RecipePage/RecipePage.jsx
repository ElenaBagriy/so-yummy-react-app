import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RecipeIngredientsList } from "../../components/Recipe/RecipeIngredientsList/RecipeIngredientsList";
import { RecipePageHero } from "../../components/Recipe/RecipePageHero/RecipePageHero";
import { RecipePreparation } from "../../components/Recipe/RecipePreparation/RecipePreparation";
import { RecipeSkeleton } from "../../components/Recipe/RecipeSceleton";
import { getRecipeById } from "redux/recipes/recipesOperations";
import { selectChoosedRecipe, selectLoadingRecipes, selectShoppingIsLoading } from "../../redux/selectors";
import { fetchShoppingList } from "../../redux/shoplist/shoplistOperation";

const RecipePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
 
  const {
    description,
    ingredients,
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
  }, [dispatch, id]);
    
  const isLoadingShoppingList = useSelector(selectShoppingIsLoading);
  const isLoading = useSelector(selectLoadingRecipes);

  return (
    <>
      <RecipePageHero
        title={title}
        description={description}
        time={time}
        id={_id}
        favorite={favorite}
      />
      {isLoadingShoppingList || isLoading ? (
        <RecipeSkeleton />
      ) : (<>
          <RecipeIngredientsList ingredients={ingredients} recipeId={_id} />
          <RecipePreparation
            preview={previewImg}
            title={title}
            instructions={instructions}
            tags={tags}
        />
      </>)}
    </>
  );
};

export default RecipePage;
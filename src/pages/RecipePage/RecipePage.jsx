import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RecipeIngredientsList } from "../../components/Recipe/RecipeIngredientsList/RecipeIngredientsList";
import { RecipePageHero } from "../../components/Recipe/RecipePageHero/RecipePageHero";
import { RecipePreparation } from "../../components/Recipe/RecipePreparation/RecipePreparation";
import { RecipeSkeleton } from "../../components/Recipe/RecipeSceleton";
import { getRecipeById } from "redux/recipes/recipesOperations";
import { selectChoosedRecipe, selectLoadingRecipes } from "../../redux/selectors";
import { fetchShoppingList } from "../../redux/shoplist/shoplistOperation";
import { Main } from "reusableComponents/Main/Main";
import { GoToTop } from "reusableComponents/ScrollToTop/ScrollToTop";
import { Background } from "reusableComponents/Background/Background";
import { Container } from "reusableComponents/Container/Container";
import { Section } from "./RecipePage.styled";
import { useLocation } from "react-router-dom";
import { getOwnRecipeById } from "redux/ownRecipes/ownRecipesOperations";

const RecipePage = () => {
  const location = useLocation();
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
    if (location?.state?.from.pathname === '/my') {
      dispatch(getOwnRecipeById(id));
    } else {
      dispatch(getRecipeById(id));
    }
  }, [dispatch, id, location?.state?.from.pathname]);
    
  
  const isLoading = useSelector(selectLoadingRecipes);

  return (
    <Main>
      <Background noDots />
      <RecipePageHero
        title={title}
        description={description}
        time={time}
        id={_id}
        favorite={favorite}
        buttonState={location?.state?.from.pathname === '/my'}
      />
      <Section>
        <Container>
          {/* <RecipeSkeleton /> */}
          {isLoading ? (
            <RecipeSkeleton />
          ) : (<>
              <RecipeIngredientsList ingredients={ingredients} />
              <RecipePreparation
                preview={previewImg}
                title={title}
                instructions={instructions}
                tags={tags}
            />
          </>)}
        </Container>
      </Section>
      <GoToTop />
    </Main>
  );
};

export default RecipePage;
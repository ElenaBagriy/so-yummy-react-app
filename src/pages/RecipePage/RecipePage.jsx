import { useEffect } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectChoosedRecipe } from "../../redux/selectors";
import { fetchShoppingList } from "../../redux/shoplist/shoplistOperation";
import { getRecipeById } from "redux/recipes/recipesOperations";
import { getOwnRecipeById } from "redux/ownRecipes/ownRecipesOperations";
import { Main } from "reusableComponents/Main/Main";
import { GoToTop } from "reusableComponents/ScrollToTop/ScrollToTop";
import { Background } from "reusableComponents/Background/Background";
import { Container } from "reusableComponents/Container/Container";
import { RecipeIngredientsList } from "../../components/Recipe/RecipeIngredientsList/RecipeIngredientsList";
import { RecipePageHero } from "../../components/Recipe/RecipePageHero/RecipePageHero";
import { RecipePreparation } from "../../components/Recipe/RecipePreparation/RecipePreparation";
import { Section } from "./RecipePage.styled";

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
    youtube
  } = useSelector(selectChoosedRecipe);

  useEffect(() => {
    dispatch(fetchShoppingList());
    if (location?.state?.from.pathname === '/my') {
      dispatch(getOwnRecipeById(id));
    } else {
      dispatch(getRecipeById(id));
    }
  }, [dispatch, id, location?.state?.from.pathname]);


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
          <RecipeIngredientsList ingredients={ingredients} />
          <RecipePreparation
            preview={previewImg}
            title={title}
            instructions={instructions}
            youtube={youtube}
          />
        </Container>
      </Section>
      <GoToTop />
    </Main>
  );
};

export default RecipePage;
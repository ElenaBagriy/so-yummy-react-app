import {
  Box,
  ButtonWrapper,
  Img,
  List,
  ListHeaderText,
  ListItem,
  ListItemHeader,
  Measure,
  Title,
  Wrapper,
} from "./RecipeInngredientsList.styled";
import CustomCheckbox from "../CheckBox/CkeckBox";
import { useSelector } from "react-redux";
import { selectShoppingList } from "redux/shoplist/shoplistSelectors";

const RecipeInngredientsList = ({ ingredients, recipeId }) => {
  const list = useSelector(selectShoppingList);


  return (
    <Box>
      <List>
        <ListItemHeader>
          <ListHeaderText>Ingredients</ListHeaderText>
          <div>
            <ListHeaderText>Number</ListHeaderText>
            <ListHeaderText>Add to list</ListHeaderText>
          </div>
        </ListItemHeader>
        {ingredients?.map(({ _id, title, thumb, measure }) => {
          const recipe = list.find((recipe) => recipe.recipeId === recipeId);
          const isChecked = recipe?.ingredients?.some(
            (item) => item.id === _id
          );
          if (!_id) {
            return null;
          }
          return (
            <ListItem key={_id}>
              <Wrapper>
                <Img alt={title} src={thumb} width={48} height={48} />
                <Title>{title}</Title>
              </Wrapper>
              <ButtonWrapper>
                <Measure>{measure}</Measure>
                <CustomCheckbox
                  recipeId={recipeId}
                  ingredientId={_id}
                  isChecked={isChecked}
                  measure={measure} //fix str in arr
                />
              </ButtonWrapper>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default RecipeInngredientsList;

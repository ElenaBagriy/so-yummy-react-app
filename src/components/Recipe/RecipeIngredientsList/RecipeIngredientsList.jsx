import { useSelector } from "react-redux";
import { selectShoppingList } from "../../../redux/selectors";
import {
  ButtonWrapper,
  Img,
  List,
  ListHeaderText,
  ListItem,
  ListItemHeader,
  Measure,
  RightWrapper,
  Title,
  Wrapper,
} from "./RecipeIngredientsList.styled";
import { CustomCheckbox } from "../Checkbox/Checkbox";

export const RecipeIngredientsList = ({ ingredients }) => {
  const list = useSelector(selectShoppingList);

  return (
      <List>
        <ListItemHeader>
          <ListHeaderText>Ingredients</ListHeaderText>
          <RightWrapper>
            <ListHeaderText>Number</ListHeaderText>
            <ListHeaderText>Add to list</ListHeaderText>
          </RightWrapper>
        </ListItemHeader>
        {ingredients && ingredients.map(({ _id, title, thumb, measure }) => {
          if (!_id) {
            return null;
          }
          const isChecked = list.some((item) => item.productId === _id && item.measure[0] === measure );
          
          return (
            <ListItem key={_id}>
              <Wrapper>
                <Img alt={title} src={thumb} width={48} height={48} />
                <Title>{title}</Title>
              </Wrapper>
              <ButtonWrapper>
                <Measure>{measure}</Measure>
                <CustomCheckbox
                  ingredientId={_id}
                  isChecked={isChecked}
                  measure={measure}
                />
              </ButtonWrapper>
            </ListItem>
          );
        })}
      </List>
  );
};

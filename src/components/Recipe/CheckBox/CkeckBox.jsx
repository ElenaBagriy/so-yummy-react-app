import { useDispatch } from "react-redux";
import { removeProductFromShoppingList, addProductToShoppingList } from "redux/shoplist/shoplistOperation";
const { useState } = require("react");
const { SvgCheck, Box } = require("./CkeckBox.styled");

const CustomCheckbox = ({ recipeId, ingredientId, isChecked }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(isChecked);

  const handleChange = () => {
    if (!checked) {
      dispatch(addProductToShoppingList({ recipeId, ingredientId }));
    } else {
      const id = ingredientId;
      dispatch(removeProductFromShoppingList({ id, recipeId }));
    }
    setChecked(!checked);
  };

  return <Box onClick={handleChange}>{checked && <SvgCheck />}</Box>;
};

export default CustomCheckbox;

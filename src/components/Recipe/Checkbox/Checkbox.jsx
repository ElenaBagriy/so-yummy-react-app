import { useDispatch } from "react-redux";
import { removeProductFromShoppingList, addProductToShoppingList } from "redux/shoplist/shoplistOperation";
import { useState } from "react";
import { SvgCheck, Box } from "./Checkbox.styled";

export const CustomCheckbox = ({ ingredientId, isChecked, measure }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(isChecked);

  const handleChange = () => {
    if (!checked) {
      // const productId = ingredientId
      dispatch(addProductToShoppingList({ ingredientId, measure }));
    } else {
      // const id = ingredientId;
      dispatch(removeProductFromShoppingList({ ingredientId, measure }));
    }
    setChecked(!checked);
  };

  return <Box onClick={handleChange}>{checked && <></>
    // <SvgCheck />
  }</Box>;
};

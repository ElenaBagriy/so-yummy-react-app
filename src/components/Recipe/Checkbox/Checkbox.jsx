import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeProductFromShoppingList, addProductToShoppingList } from "../../../redux/shoplist/shoplistOperation";
import { SvgCheck, Box } from "./Checkbox.styled";

export const CustomCheckbox = ({ ingredientId: productId, isChecked, measure }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(null);
  
  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked])
  
  const handleChange = () => {
    if (!checked) {
      dispatch(addProductToShoppingList({ productId, measure }));
      setChecked(true);
    } else {
      dispatch(removeProductFromShoppingList({ productId, measure }));
      setChecked(false);
    }
  };

  return <Box onClick={handleChange}>{checked && 
    <SvgCheck />
  }</Box>;
};

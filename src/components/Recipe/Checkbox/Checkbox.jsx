import { useDispatch, useSelector } from "react-redux";
import { removeProductFromShoppingList, addProductToShoppingList } from "../../../redux/shoplist/shoplistOperation";
import { useEffect, useState } from "react";
import { SvgCheck, Box } from "./Checkbox.styled";
import { selectShoppingIsLoading } from "redux/selectors";

export const CustomCheckbox = ({ ingredientId: productId, isChecked, measure }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(null);
  const isLoadingShoppingList = useSelector(selectShoppingIsLoading);
  
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

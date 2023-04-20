import { useDispatch } from "react-redux";
import { removeProductFromShoppingList, addProductToShoppingList } from "../../../redux/shoplist/shoplistOperation";
import { useEffect, useState } from "react";
import { SvgCheck, Box } from "./Checkbox.styled";

export const CustomCheckbox = ({ ingredientId: productId, isChecked, measure }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(null);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked])
  
  const handleChange = () => {
    console.log(checked);
    if (!checked) {
      dispatch(addProductToShoppingList({ productId, measure }));
      console.log('add');
      setChecked(true);
    } else {
      dispatch(removeProductFromShoppingList({ productId, measure }));
      console.log('remove');
      setChecked(false);
    }
    // setChecked(!checked);
  };

  return <Box onClick={handleChange}>{checked && <>1</>
    // <SvgCheck />
  }</Box>;
};

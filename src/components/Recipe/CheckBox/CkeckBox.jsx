import { useDispatch } from "react-redux";
import { removeProductFromShoppingList, addProductToShoppingList } from "redux/shoplist/shoplistOperation";
const { useState } = require("react");
const { SvgCheck, Box } = require("./CkeckBox.styled");

const CustomCheckbox = ({ ingredientId, isChecked, measure }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(isChecked);

  const handleChange = () => {
    if (!checked) {
      const productId = ingredientId
      dispatch(addProductToShoppingList({ productId, measure }));
    } else {
      const id = ingredientId;
      dispatch(removeProductFromShoppingList({ id }));
    }
    setChecked(!checked);
  };

  return <Box onClick={handleChange}>{checked && <SvgCheck />}</Box>;
};

export default CustomCheckbox;

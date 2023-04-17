import { useSelector } from "react-redux";
import {
  getRecipes,
  getTotalRecipes,
  getLimitRecipes,
} from "redux/recipes/recipesSelector";

export const useRecipes = () => {
  const isRecipes = useSelector(getRecipes);
  const isTotal = useSelector(getTotalRecipes);
  const isLimit = useSelector(getLimitRecipes);
  const isPage = Math.ceil(isTotal / isLimit);

  return {
    isRecipes,
    isPage,
  };
};
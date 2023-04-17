import { useSelector } from "react-redux";
import {
  selectPopularRecipes,
  selectTotalRecipes,
  selectLimitRecipes,
} from "redux/selectors";

export const useRecipes = () => {
  const isRecipes = useSelector(selectPopularRecipes);
  const isTotal = useSelector(selectTotalRecipes);
  const isLimit = useSelector(selectLimitRecipes);
  const isPage = Math.ceil(isTotal / isLimit);

  return {
    isRecipes,
    isPage,
  };
};
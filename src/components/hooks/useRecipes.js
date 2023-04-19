import { useSelector } from "react-redux";
import {
  selectRecipes,
  selectTotalRecipes,
  selectLimitRecipes,
  selectLoadingRecipes,
} from "redux/selectors";

export const useRecipes = () => {
  const isRecipes = useSelector(selectRecipes);
  const isTotal = useSelector(selectTotalRecipes);
  const isLimit = useSelector(selectLimitRecipes);
  const isPage = Math.ceil(isTotal / isLimit);

  const isLoading = useSelector(selectLoadingRecipes);

  return {
    isRecipes,
    isPage,
    isLoading,
  };
};
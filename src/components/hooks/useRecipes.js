import { useSelector } from "react-redux";
import {
  selectSearchRecipes,
  selectTotalSearchRecipes,
  selectLimitSearchRecipes,
  selectLoadingRecipes,
} from "redux/selectors";

export const useRecipes = () => {
  const isRecipes = useSelector(selectSearchRecipes);
  const isTotal = useSelector(selectTotalSearchRecipes);
  const isLimit = useSelector(selectLimitSearchRecipes);
  const isPage = Math.ceil(isTotal / isLimit);

  const isLoading = useSelector(selectLoadingRecipes);

  return {
    isRecipes,
    isPage,
    isLoading,
  };
};
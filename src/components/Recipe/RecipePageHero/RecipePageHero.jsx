import { useTheme } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  ClockSvg,
  ImgBox,
  MainPageTitle,
  Text,
  Time,
} from "./RecipePageHero.styled";
import {
  toggleFavoriteRecipesById,
} from "redux/recipes/recipesOperations";
import {
  selectLoadingRecipes,
  // selectUserFavouritesRecipes,    //проверить
} from "../../../redux/selectors";
import ButtonLoader from "components/ButtonLoader/ButtonLoader";

export const RecipePageHero = ({ title, description, time, id, favorite }) => {
  // const userFavouritesRecipes = useSelector(selectUserFavouritesRecipes);    //проверить
  const [first, setFirst] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorite);
  const dispatch = useDispatch();
  const theme = useTheme();

  const isLoading = useSelector(selectLoadingRecipes);

  const topRef = useRef();

  useEffect(() => {
    if (!first) {
      // setIsFavorite(userFavouritesRecipes.some((recipe) => recipe._id === id));    //проверить заменить селектором isFavorite
      setFirst(true);
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [ id, first]);
    
      const handleFavoriteButton = (id) => {
    if (isFavorite) {
      dispatch(toggleFavoriteRecipesById(id));
    } else {
      dispatch(toggleFavoriteRecipesById(id));
    }
    setIsFavorite(!isFavorite);
      };
    
      return (
    <>
      <ImgBox />
      <MainPageTitle $isBig={title?.split(" ").length > 6} ref={topRef}>
        {title}
      </MainPageTitle>
      <Text $isBig={title?.split(" ").length > 6}>{description}</Text>
      <Button
        disabled={isLoading}
        whileHover={{
          backgroundColor: theme.colors.accentColor,
          borderColor: theme.colors.accentColor,
        }}
        onClick={() => handleFavoriteButton(id)}
      >
        {isLoading ? (
          <ButtonLoader color="white" width={25} />
        ) : isFavorite ? (
          "Remove to favorite recipes"
        ) : (
          "Add to favorite recipes"
        )}
      </Button>
      <Box>
        {/* <ClockSvg /> */}
        <Time>{time} min</Time>
      </Box>
    </>
  );
};

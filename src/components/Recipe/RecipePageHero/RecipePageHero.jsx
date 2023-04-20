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
import { toggleFavoriteRecipesById } from "../../../redux/recipes/recipesOperations";
import { selectLoadingRecipes } from "../../../redux/selectors";
import ButtonLoader from "../../ButtonLoader/ButtonLoader";
import { Container } from "reusableComponents/Container/Container";

export const RecipePageHero = ({ title, description, time, id, favorite }) => {
  const [first, setFirst] = useState(false);
  const [isFavorite, setIsFavorite] = useState(null);

  const dispatch = useDispatch();
  const theme = useTheme();

  const isLoading = useSelector(selectLoadingRecipes);

  const topRef = useRef();

  useEffect(() => {
    setIsFavorite(favorite);
    if (!first) {
      setFirst(true);
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [ favorite, first]);

  const handleFavoriteButton = (id) => {
    dispatch(toggleFavoriteRecipesById(id));
    setIsFavorite(!isFavorite);
      };

      return (
    <>
          <ImgBox />
          <Container>
      <MainPageTitle $isBig={title?.split(" ").length > 6} ref={topRef}>
        {title}
      </MainPageTitle>
      <Text $isBig={title?.split(" ").length > 6}>{description}</Text>
      <Button
        disabled={isLoading}
        whileHover={{
          backgroundColor: theme.colors.green,
          borderColor: theme.colors.green,
        }}
        onClick={() => handleFavoriteButton(id)}
      >
        {isLoading ? (
          <ButtonLoader color="white" width={25} />
        ) : isFavorite ? (
          "Remove from favorite recipes"
        ) : (
          "Add to favorite recipes"
        )}
      </Button>
      <Box>
        <ClockSvg />
        <Time>{time} min</Time>
            </Box>
            </Container>
    </>
  );
};

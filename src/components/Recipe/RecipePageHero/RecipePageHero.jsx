import { useTheme } from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  ClockSvg,
  Hero,
  MainPageTitle,
  Text,
  TextWrapper,
  Time,
} from "./RecipePageHero.styled";
import { toggleFavoriteRecipesById } from "../../../redux/recipes/recipesOperations";
import { selectLoadingRecipes } from "../../../redux/selectors";
import ButtonLoader from "../../ButtonLoader/ButtonLoader";
import timeConvert from "services/timeConverter";

export const RecipePageHero = ({ title, description, time, id, favorite }) => {
  const [isFavorite, setIsFavorite] = useState(null);

  const dispatch = useDispatch();
  const theme = useTheme();

  const isLoading = useSelector(selectLoadingRecipes);

  useEffect(() => {
    setIsFavorite(favorite);
  }, [ favorite]);

  const handleFavoriteButton = (id) => {
    dispatch(toggleFavoriteRecipesById(id));
    setIsFavorite(!isFavorite);
      };

      return (
        <Hero>
          <TextWrapper>
          <MainPageTitle
            // $isBig={title?.split(" ").length > 6}
          >
            {title}
          </MainPageTitle>
            <Text $isBig={title?.split(" ").length > 6}>{description}</Text>
            </TextWrapper>
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
            <Time>{timeConvert(time)}</Time>
          </Box>
    </Hero>
  );
};

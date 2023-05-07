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
import { getRecipesFavorite, toggleFavoriteRecipesById } from "../../../redux/recipes/recipesOperations";
import { selectLoadingRecipes } from "../../../redux/selectors";
import ButtonLoader from "../../ButtonLoader/ButtonLoader";
import timeConvert from "services/timeConverter";
import { MotivatingModal } from "reusableComponents/MotivatingModal/MotivatingModal";
import { useMediaQuery } from "@mui/material";

export const RecipePageHero = ({ title, description, time, id, favorite, buttonState }) => {
  const [isFavorite, setIsFavorite] = useState(null);
  const [motivation, setMotivation] = useState(null);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const dispatch = useDispatch();
  const theme = useTheme();
  
  const isLoading = useSelector(selectLoadingRecipes);

  useEffect(() => {
    setIsFavorite(favorite);
  }, [ favorite]);

  useEffect(() => {
    if (isFavorite && !favorite) {
      dispatch(getRecipesFavorite(1))
        .then((e) => {
          if (e.payload.total === 1) {
            setMotivation(4);
          }
          if (e.payload.total === 10) {
            setMotivation(3);
          }
        })
    }
  }, [dispatch, isFavorite, favorite]);
  
  const handleFavoriteButton = (id) => {
    dispatch(toggleFavoriteRecipesById(id))
      .then(() => setIsFavorite(!isFavorite));
  };

  const onCloseModal = () => {
        setMotivation(null);
    }

  return (<>
    {motivation && <MotivatingModal option={motivation} onClose={onCloseModal} />}
  
    <Hero>
          <div>
          <TextWrapper>
          <MainPageTitle
            // $isBig={title?.split(" ").length > 6}
          >
            {title}
          </MainPageTitle>
            <Text $isBig={title?.split(" ").length > 6}>{description}</Text>
          </TextWrapper>
          {!buttonState &&
            <Button
              disabled={isLoading}
              whileHover={{
                backgroundColor: theme.colors.green,
                borderColor: theme.colors.green,
              }}
              onClick={() => handleFavoriteButton(id)}
          >
              {isLoading ? (
                <ButtonLoader color={theme.colors.green} width={isMobile ? 12 : 25} />
              ) : isFavorite ? (
                "Remove from favorite recipes"
              ) : (
                "Add to favorite recipes"
              )}
              </Button>}
            </div>
          <Box>
            <ClockSvg />
            <Time>{timeConvert(time)}</Time>
          </Box>
    </Hero>
    </>
  );
};

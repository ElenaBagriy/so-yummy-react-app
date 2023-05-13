import { nanoid } from "@reduxjs/toolkit";
import {
  Box,
  ImageWrapper,
  Img,
  Item,
  List,
  MainBox,
  Span,
  SpanBox,
  Text,
  Title,
} from "./RecipePreparation.styled";
import defaultImage from '../../../images/commonImages/defaultImage@2x.png';
import { Player } from "../Player/Player";

export const RecipePreparation = ({ preview, title, instructions, youtube }) => {

  const splitText = (stringToSplit, separator) => {
    if (
      stringToSplit !== null &&
      stringToSplit?.length !==0 &&
      !Array.isArray(stringToSplit)
    ) {
    if (stringToSplit.startsWith(1)) {
      return stringToSplit
        .split("\r\n")
        .map((n) => {
          const number = n.trim().slice(0, 1);
          if (Number(number) !== 0 && Number(number)) {
            return n.replace(number, "");
          };
          return n;
        })
        .filter(n => n)
        .filter(x => x.length > 2);
    }
      return stringToSplit
        .split(separator)
        .filter(n => n)
        .filter(x => x.length > 2);
    }
  };

  const steps = instructions && splitText(instructions, '\r\n');
    
  return (
    <MainBox>
      <Box>
        <Title>Recipe Preparation</Title>
        <List>
          {steps?.map((el, idx) => (
            <Item key={nanoid()}>
              <SpanBox>
                <Span>{idx + 1}</Span>
              </SpanBox>
              <Text>{el}</Text>
            </Item>
          ))}
        </List>
      </Box>
      {youtube ? <Player url={youtube} src={preview} /> :
        <ImageWrapper>
          <Img alt={title} src={preview ? preview : defaultImage} width={343} />
        </ImageWrapper>}
    </MainBox>
  );
};
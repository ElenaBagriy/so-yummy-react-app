import { nanoid } from "@reduxjs/toolkit";
import {
  Box,
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

export const RecipePreparation = ({ preview, title, instructions }) => {
  const cleanedInstructions = instructions?.replace(/^\d+\)\s*/gm, "");
  const sentences = cleanedInstructions?.split(/(?:\.|\?|!)\s/g);
  const steps = sentences?.map((sentence) =>
    sentence.replace(/^\d+\)/, "").trim()
  );
    
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
        <Img alt={title} src={preview ? preview : defaultImage} width={343} />
    </MainBox>
  );
};
import React from 'react';
import { MainPageTitle } from 'reusableComponents/ManePageTitle/ManePageTitle';
import { FollowUs } from 'components/FollowUs/FollowUs';
import { PopularRecipe } from 'components/PopularRecipe/PopularRecipe';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { Background } from 'reusableComponents/Background/Background';
import { Container } from 'reusableComponents/Container/Container';
import { Section, WrapperStyled } from './AddRecipePage.styled';
import { Main } from 'reusableComponents/Main/Main';

const AddRecipePage = () => {
  return (
    <Main>
      <Background />
      <Container>
        <Section>
        <MainPageTitle title="Add recipe" />
        <WrapperStyled>
          <div>
            <AddRecipeForm />
          </div>
          <div>
            <FollowUs />
            <PopularRecipe />
          </div>
          </WrapperStyled>
          </Section>
      </Container>
    </Main>
  );
};

export default AddRecipePage;

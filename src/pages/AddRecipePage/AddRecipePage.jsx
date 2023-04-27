import React from 'react';
import { MainPageTitle } from 'reusableComponents/ManePageTitle/ManePageTitle';
import { FollowUs } from 'components/FollowUs/FollowUs';
import { PopularRecipe } from 'components/PopularRecipe/PopularRecipe';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';

import { Background } from 'reusableComponents/Background/Background';
import { Container } from 'reusableComponents/Container/Container';
import { SecondaryWrapper, Section, WrapperStyled } from './AddRecipePage.styled';
import { Main } from 'reusableComponents/Main/Main';
import { GoToTop } from 'reusableComponents/ScrollToTop/ScrollToTop';
import { useMediaQuery } from '@mui/material';

const AddRecipePage = () => {
  const desktop = useMediaQuery('(min-width: 1280px)');
  
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
            <SecondaryWrapper>
              {desktop && <FollowUs />}
            <PopularRecipe />
          </SecondaryWrapper>
          </WrapperStyled>
          </Section>
      </Container>
      <GoToTop/>
    </Main>
  );
};

export default AddRecipePage;

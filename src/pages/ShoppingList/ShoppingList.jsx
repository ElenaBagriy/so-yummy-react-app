import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ShoppingListTabl from "components/ShoppingList/ShoppingListTabl";
import { fetchShoppingList } from "redux/shoplist/shoplistOperation";
import { Container } from 'reusableComponents/Container/Container';
import { MainPageTitle } from '../../reusableComponents/ManePageTitle/ManePageTitle';
import { Main } from 'reusableComponents/Main/Main';
import { Background } from 'reusableComponents/Background/Background';
import { Section } from './ShoppingList.styled';
import { GoToTop } from 'reusableComponents/ScrollToTop/ScrollToTop';


const ShoppingListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch]);

  return (
    <Main>
      <Background />
      <Container>
        <Section>
          <MainPageTitle title="Shopping list"></MainPageTitle>
          <ShoppingListTabl />
          </Section>
      </Container>
      <GoToTop/>
      </Main>
  );
};

export default ShoppingListPage;
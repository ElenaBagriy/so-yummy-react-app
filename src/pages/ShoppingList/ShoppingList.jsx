import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchShoppingList } from "redux/shoplist/shoplistOperation";
import ShoppingListTabl from "components/ShoppingList/ShoppingListTabl";
import { Container } from '../../reusableComponents/Container/Container';
import { MainPageTitle } from '../../reusableComponents/ManePageTitle/ManePageTitle';
import { Main } from '../../reusableComponents/Main/Main';
import { Background } from '../../reusableComponents/Background/Background';
import { GoToTop } from '../../reusableComponents/ScrollToTop/ScrollToTop';
import { Section } from './ShoppingList.styled';


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
          <MainPageTitle title="Shopping list"/>
          <ShoppingListTabl />
        </Section>
      </Container>
      <GoToTop />
    </Main>
  );
};

export default ShoppingListPage;
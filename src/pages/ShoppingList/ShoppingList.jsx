import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ShoppingListTabl from "components/ShoppingList/ShoppingListTabl";
import { fetchShoppingList } from "redux/shoplist/shoplistOperation";
import { Container } from 'reusableComponents/Container/Container';
import { MainPageTitle } from '../../reusableComponents/ManePageTitle/ManePageTitle';



const ShoppingListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch]);

  return (
    <Container>
        <MainPageTitle title="Shopping list"></MainPageTitle>
        <ShoppingListTabl />
    </Container>
  );
};

export default ShoppingListPage;
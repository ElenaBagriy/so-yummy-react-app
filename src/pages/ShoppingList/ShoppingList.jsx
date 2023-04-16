import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ShoppingListTabl from "components/ShoppingList/ShoppingListTabl";
import { fetchShoppingList } from "redux/shoplist/shoplistOperation";
import { Container } from 'reusableComponents/Container/Container';
import { Title } from 'reusableComponents/Title/Title';



const ShoppingListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch]);

  return (
    <Container>
        <Title title="Shopping list"></Title>
        <ShoppingListTabl />
    </Container>
  );
};

export default ShoppingListPage;
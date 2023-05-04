import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  BoxForImage,
  DelIconStyled,
  DeleteBtn,
  IngredientsShoppingListHead,
  IngredientsShoppingListImg,
  IngredientsShoppingListItem,
  IngredientsShoppingListMeasure,
  IngredientsShoppingListStyled,
  TemplatetWrapper,
} from './ShoppingListTabl.styled';
import { selectShoppingList } from 'redux/shoplist/shoplistSelectors';
import { removeProductFromShoppingList } from 'redux/shoplist/shoplistOperation';
import NeedSearching from 'components/NeedSearching/NeedSearching';


export default function IngredientsShoppingList() {
  const dispatch = useDispatch();
  const products = useSelector(selectShoppingList);

  const deleteProduct = ({ productId, measureString }) => {
    dispatch(removeProductFromShoppingList({ productId, measure: measureString }))
  };

  return (
    <div>
      <IngredientsShoppingListHead>
        <p>Products</p>
        <p>Number</p>
        <p>Remove</p>
      </IngredientsShoppingListHead>
      {!products || products.length === 0 ?
        <TemplatetWrapper>
          <NeedSearching text="Please, add something to your shopping list." />
        </TemplatetWrapper> : <IngredientsShoppingListStyled>
          {products.map(({ productId, title, thumb, measure }) => {
            const measureString = measure.toString();

            return (<IngredientsShoppingListItem key={productId}>
              <BoxForImage>
                <IngredientsShoppingListImg src={thumb} alt={title} />
              </BoxForImage>
              <p>{title}</p>
              <IngredientsShoppingListMeasure>
                {measure}
              </IngredientsShoppingListMeasure>
              <DeleteBtn type='button'
                onClick={() => deleteProduct({ productId, measureString })}>
                <DelIconStyled />
              </DeleteBtn>
            </IngredientsShoppingListItem>)
          })
          }
        </IngredientsShoppingListStyled>}
    </div>
  );
}
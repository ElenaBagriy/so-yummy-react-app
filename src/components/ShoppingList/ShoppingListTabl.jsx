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
} from './ShoppingListTabl.styled';
import { selectShoppingList } from 'redux/shoplist/shoplistSelectors';
import { removeProductFromShoppingList } from 'redux/shoplist/shoplistOperation';


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
      <IngredientsShoppingListStyled>
        {products.map(({ productId, title, thumb, measure }) => {
          const measureString = measure.toString();

          return (<IngredientsShoppingListItem key={productId}>
            <BoxForImage>
              <IngredientsShoppingListImg src={thumb} alt={title} />
            </BoxForImage>
            
            <p>{title}</p>
            {/* <p>{desc}</p> */}
            <IngredientsShoppingListMeasure>
              {measure}
            </IngredientsShoppingListMeasure>
            <DeleteBtn type='button'
              onClick={() => deleteProduct({ productId, measureString })}>
              <DelIconStyled />
            </DeleteBtn>
          </IngredientsShoppingListItem>)
        })}
      </IngredientsShoppingListStyled>
    </div>
  );
}
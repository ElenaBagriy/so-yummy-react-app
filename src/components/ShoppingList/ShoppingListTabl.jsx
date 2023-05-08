import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  BoxForImage,
  DelIconStyled,
  DeleteBtn,
  TableHead,
  IngredientsItem,
  Measure,
  IngredientsList,
  TemplatetWrapper,
  MeasureList,
  RightWrapper,
  ProductWrapper,
  MeasureWrapper,
  ButtonWrapper,
  MeasureItem,
} from './ShoppingListTabl.styled';
import { selectShoppingList } from 'redux/shoplist/shoplistSelectors';
import { removeProductFromShoppingList } from 'redux/shoplist/shoplistOperation';
import NeedSearching from 'components/NeedSearching/NeedSearching';


export default function IngredientsShoppingList() {
  const dispatch = useDispatch();
  const products = useSelector(selectShoppingList);

  const deleteProduct = ({ productId, measure }) => {
    dispatch(removeProductFromShoppingList({ productId, measure: measure[0] }))
  };

  return (
    <div>
      <TableHead>
        <p>Products</p>
        <RightWrapper>
          <p>Number</p>
          <p>Remove</p>
        </RightWrapper>
      </TableHead>
      {!products || products.length === 0 ?
        <TemplatetWrapper>
          <NeedSearching text="Please, add something to your shopping list." />
        </TemplatetWrapper> :
        <IngredientsList>
          {products.map(({ productId, title, thumb, measure }) => {
            return (<IngredientsItem key={productId}>
              <ProductWrapper>
                <BoxForImage>
                  <img src={thumb} alt={title} />
                </BoxForImage>
                <p>{title}</p>
              </ProductWrapper>
              <MeasureWrapper>
                <MeasureList>
                  {measure.map((meas, index) => {
                    return <MeasureItem key={index}>
                      <Measure>
                        {meas}
                      </Measure>
                    </MeasureItem>
                  })}
                </MeasureList>
                <ButtonWrapper>
                  <DeleteBtn type='button'
                    onClick={() => deleteProduct({ productId, measure })}>
                    <DelIconStyled />
                  </DeleteBtn>
                </ButtonWrapper>
              </MeasureWrapper>
            </IngredientsItem>)
          })
          }
        </IngredientsList>}
    </div>
  );
}
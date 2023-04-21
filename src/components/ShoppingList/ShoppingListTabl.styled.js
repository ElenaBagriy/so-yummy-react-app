import styled from 'styled-components';
import { ReactComponent as DelIcon } from '../../images/commonImages/closeBtn.svg';


export const IngredientsShoppingListHead = styled.div`
  margin-bottom: 24px;
  margin-top: 72px;
  max-width: 343px;
  padding: 12px 14px;
  display: flex;
  gap: 18px;
  color: #fafafa;
  font-weight: 600;
  font-size: 10px;
  line-height: 1, 5;
  background-color: #8baa36;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    max-width: 704px;
    padding: 21px 32px;
    font-size: 18px;
    gap: 38px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 50px;
    max-width: 1240px;
    padding: 21px 40px;
    gap: 109px;
  }
  p:first-of-type {
    margin-right: auto;
  }
`;
export const IngredientsShoppingListStyled = styled.ul`
  li:not(:last-child) {
    margin-bottom: 16px;
    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }
`;

export const IngredientsShoppingListItem = styled.li`
  display: flex;
  align-items: start;
  max-width: 343px;
  padding: 0px 10px 23px 10px; //10px;
  font-size: 12px;
  font-weight: 500;
  background: #fafafa;
  border-bottom: 1px solid rgb(224, 224, 224);
  /* border-radius: 8px; */
  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 0px 24px 42px 16px; // 16px 24px;
    font-size: 24px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1240px;
    padding: 0px 70px 42px 32px;
  }
  img {
    border-radius: 8px;
    width: 65px;
    height: 100%;
    margin: 0px 8px 0px 0px;
    @media screen and (min-width: 768px) {
      width: 144px;
      margin-right: 24px;
    }
    @media screen and (min-width: 1280px) {
      width: 180px;
      margin-right: 40px;
    }
  }
  input[type='checkbox'] {
    width: 18px;
    height: 18px;
    @media screen and (min-width: 768px) {
      width: 35px;
      height: 35px;
    }
  }
  p:nth-child(2) {
    margin-right: auto;
  }
`;

export const IngredientsShoppingListMeasure = styled.p`
  margin-right: 28px;
  padding: 4px;
  background-color: #8baa36;
  color: #fafafa;
  font-size: 10px;
  line-height: 1, 5;
  font-weight: 600;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    padding: 4px 8px;
    font-size: 18px;
    margin-right: 78px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 151px;
  }
`;

export const BoxForImage = styled.div`
  height: 60px;
  width: 60px;
  background-color: ${p => p.theme.colors.ingredientsBgrCol};
  border-radius: 10px;
  margin-right: 10px;
  @media screen and (min-width: 769px) {
    height: 95px;
    width: 95px;
    margin-right: 15px;
  }
`;

export const IngredientsShoppingListImg = styled.img`
  width: 100%;
  height: 100%;
`

export const DeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  stroke: #3E4462;
  outline: none;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 769px) {
    width: 20px;
    height: 20px;
    &:hover {
      stroke: #8BAA36;
    }
  }
`;

export const DelIconStyled = styled(DelIcon)`
  display: flex;
  position: absolute;
  width: 14px;
  height: 14px;
  stroke: #3E4462;
  transform: translate(0%, -50%);
  @media screen and (min-width: 769px) {
    width: 20px;
    height: 20px;
  }
`;
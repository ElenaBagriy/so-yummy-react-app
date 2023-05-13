import styled from 'styled-components';
import { ReactComponent as DelIcon } from '../../images/commonImages/closeBtn.svg';

export const TableHead = styled.div`
  margin-bottom: 32px;
  margin-top: 50px;
  padding: 10px;
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.bgMain};
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  background-color: ${props => props.theme.colors.green};
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    margin-top: 72px;
    padding: 16px 20px;
    height: 58px;
    font-size: 18px;
    border-radius: 8px;
  }

  @media screen and (min-width: 1280px) {
    padding: 17px 40px;
    height: 60px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 78px;
  }

  @media screen and (min-width: 1280px) {
    gap: 142px;
  }
`;

export const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 44px;
  }
`;

export const IngredientsItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 24px;
  padding-right: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  color: ${props => props.theme.text.primary};
  border-bottom: 1px solid ${props => props.theme.border.grey};

  @media screen and (min-width: 768px) {
    padding-bottom: 42px;
    padding-right: 20px;
    font-size: 16px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const BoxForImage = styled.div`
  height: 60px;
  width: 60px;
  background-color: ${p => p.theme.colors.lightGreen};
  border-radius: 6px;
  padding: 6px;
  
  @media screen and (min-width: 768px) {
    height: 97px;
    width: 93px;
    border-radius: 8px;
    padding: 8px 6px;
  }
`;

export const MeasureWrapper = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 78px;
  }

  @media screen and (min-width: 1280px) {
    gap: 142px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;

  @media screen and (min-width: 768px) {
    width: 78px;
  }
`;

export const MeasureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 50px;

  @media screen and (min-width: 768px) {
    width: 75px;
  }
`;

export const MeasureItem = styled.li`
  text-align: center;
`;

export const Measure = styled.span`
  display: inline-block;
  text-align: center;
  padding: 4px;
  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.bgMain};
  font-size: 10px;
  line-height: 1.5;
  font-weight: 600;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    padding: 4px 8px;
    font-size: 18px;
  }
`;

export const DeleteBtn = styled.button`
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.text.primary};
  outline: none;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  @media screen and (min-width: 769px) {
    width: 20px;
    height: 20px;

    &:hover {
      svg {
        stroke: ${props => props.theme.colors.green};
      }
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
  transition: stroke ${props => props.theme.hover.transition};

  @media screen and (min-width: 769px) {
    width: 20px;
    height: 20px;
  }
`;

export const TemplatetWrapper = styled.div`
  margin-top: 50px;
`;
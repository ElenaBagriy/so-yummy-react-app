import styled from 'styled-components';
import Select from 'react-select';

export const Wrapper = styled.div`
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 609px;
  }
`;

export const RecipeIngredStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${props => props.theme.text.main};
`;

export const Counter = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 92px;
    height: 28px;
    border: 1px solid ${props => props.theme.border.light};
    border-radius: 18px;

    @media screen and (min-width: 768px) {
      width: 110px;
      height: 32px;
    }
`;

export const CountButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 7px;
    padding-right: 7px;
    border: none;
    background-color: transparent;
    transition: stroke ${props => props.theme.hover.transition};

    &:not(:disabled) {
    &:hover,
    :focus {
      svg {
        stroke: ${props => props.theme.colors.green};
      }
    }
  }
    @media screen and (min-width: 768px) {
      padding-left: 8px;
      padding-right: 8px;
    }
`;

export const Icon = styled.svg`
  width: 14px;
  height: 14px;
  fill: transparent;
  stroke: ${props => props.theme.border.light};

   @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
   }
`;

export const CounterValue = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${props => props.theme.counter};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const FieldsList = styled.ul`
 display: flex;
 flex-direction: column;
 gap: 18px;

  @media screen and (min-width: 768px) {
   gap: 24px;
  }
`;

export const IngredFieldsStyled = styled.li`
  display: flex;
  justify-content: space-between;

  &:first-child {
    margin-top: 28px;

    @media screen and (min-width: 768px) {
      margin-top: 36px;
    }
  }
`;

export const Labels = styled.div`
 display: flex;
 gap: 14px;

 @media screen and (min-width: 768px) {
  gap: 32px;
 }
`;

export const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    transition: stroke ${props => props.theme.hover.transition};

    &:not(:disabled) {
    &:hover,
    :focus {
      svg {
        stroke: ${props => props.theme.colors.green};
      }
    }
  }
`;

export const DeleteIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: ${props => props.theme.counter};
  stroke-width: 1.5px;
  transition: stroke ${props => props.theme.hover.transition};

   @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
   }
`;

export const IngredientLabel = styled.label`
position: relative;
 height: 53px;
 width: 194px;

    @media screen and (min-width: 768px) {
      height: 59px;
      width: 398px;
    }
`;

export const StyledSelect = styled(Select)`
  
  &.ingr-select-container {
    height: 53px;
    width: 194px;

    @media screen and (min-width: 768px) {
      height: 59px;
      width: 398px;
    }
  }
  
  .ingr-select__control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 53px;
    background-color: ${props => props.theme.input.background};
    border-radius: 6px;
    padding-left: 16px;
    padding-right: 16px;
    outline: 0;
    cursor: pointer;
    min-height: 0;
    border: ${props => props.theme.input.border};

     input {
    position: absolute;
    
     &:focus-visible{
      outline: none;
      outline: ${props => props.theme.input.border};
      border: ${props => props.theme.input.border};
     }
    }

    @media screen and (min-width: 768px) {
      height: 59px;
      padding-left: 18px;
      padding-right: 18px;
    }
  }

  .ingr-select__control--is-focused {
    box-shadow: none;

    border: ${props => props.theme.input.border};
  }

  .ingr-select__value-container {
    padding: 0;
  }

  .ingr-select__input-container {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    padding: 0;
    margin: 0;
    color: ${props => props.theme.input.line};
    
    &:focus-visible{
      outline: none;
   }
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  .ingr-select__single-value {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${props => props.theme.input.text};

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  .ingr-select__placeholder {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${props => props.theme.placeholder.blured};

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  .ingr-select__indicator-separator {
    display: none;
  }

  .ingr-select__indicator {
    padding: 0;
  }

  .ingr-select__menu {
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
    border-radius: 6px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 8px 4px 8px 18px;
    background-color: ${props => props.theme.list.background};
    width: 100%;
    height: 154px;

    @media screen and (min-width: 768px) {
      height: 172px;
    }
  }

  .ingr-select__menu-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0;
    max-height: 138px;
    scrollbar-width: none;
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.list.scroll};
      border-radius: 12px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${props => props.theme.list.background};
      border-radius: 12px;
    }

    @media screen and (min-width: 768px) {
      max-height: 156px;
    }
  }

  .ingr-select__option {
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${props => props.theme.list.option};
    cursor: pointer;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  .ingr-select__option--is-focused {
    background-color: ${props => props.theme.list.focus};
  }

  .ingr-select__option--is-selected {
    background-color: ${props => props.theme.list.selected};
    color: ${props => props.theme.list.selectedText};
    opacity: 1;
  }

  svg {
    fill: ${props => props.theme.colors.green};
  }
`;

export const MeasureLabel = styled.div`
  position: relative;
  display: flex;
  width: 84px;
  height: 53px;

  @media screen and (min-width: 768px) {
    width: 97px;
    height: 59px;
  }

  @media screen and (min-width: 1280px) {
    width: 99px;
  }
`;

export const Input = styled.input`
  text-align: right;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom: ${props => props.theme.input.border};
  border-left: ${props => props.theme.input.border};
  border-top: ${props => props.theme.input.border};
  border-right: none;
  width: 26px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  background-color: ${props => props.theme.input.background};
  color: ${props => props.theme.placeholder.blured};

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

  &:focus-visible {
    outline: none;
    color: ${props => props.theme.input.line};
  }

  @media screen and (min-width: 768px) {
    width: 29px;
    font-size: 18px;
  }
`;

export const StyledMeasureSelect = styled(Select)`
  
  &.measure-select-container {
    height: 53px;
    width: 58px;
    

    @media screen and (min-width: 768px) {
      height: 59px;
      width: 68px;
    }
  }
  
  .measure-select__control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 53px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: ${props => props.theme.input.background};
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    padding-right: 12px;
    outline: 0;
    cursor: pointer;
    min-height: 0;
    border-bottom: ${props => props.theme.input.border};
    border-right: ${props => props.theme.input.border};
    border-top: ${props => props.theme.input.border};
    border-left: none;

    &:hover,
    :focus {
      border-bottom: ${props => props.theme.input.border};
      border-right: ${props => props.theme.input.border};
      border-top: ${props => props.theme.input.border};
      border-left: none;
    }
     input {
    position: absolute;
     &:focus-visible{
      outline: none;
     }
    }

    @media screen and (min-width: 768px) {
      height: 59px;
      padding-right: 19px;
    }
  }

  .measure-select__control--is-focused {
    box-shadow: none;
    border: none;
          border-bottom: ${props => props.theme.input.border};
      border-right: ${props => props.theme.input.border};
      border-top: ${props => props.theme.input.border};
      border-left: none;
  }

  .measure-select__value-container {
    padding: 0;
  }

  .measure-select__input-container {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    padding: 0;
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  .measure-select__single-value {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  .measure-select__placeholder {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${props => props.theme.placeholder.blured};

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  .measure-select__indicator-separator {
    display: none;
  }

  .measure-select__indicator {
    padding: 0;
  }

  .measure-select__menu {
    right: 0;
    box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
    border-radius: 6px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 12px 4px 12px 28px;
    background-color: ${props => props.theme.list.background};
    width: 84px;
    height: 154px;

    @media screen and (min-width: 768px) {
      height: 172px;
    }
  }

  .measure-select__menu-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0;
    max-height: 138px;
    scrollbar-width: none;
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.list.scroll};
      border-radius: 12px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${props => props.theme.list.background};;
      border-radius: 12px;
    }

    @media screen and (min-width: 768px) {
      max-height: 156px;
    }
  }

  .measure-select__option {
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${props => props.theme.list.option};
    cursor: pointer;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  .measure-select__option--is-focused {
     background-color: ${props => props.theme.list.focus};
  }

  .measure-select__option--is-selected {
    background-color: ${props => props.theme.list.selected};
    color: ${props => props.theme.list.selectedText};
  }

  svg {
    fill: ${props => props.theme.colors.green};
  }
`;

export const Error = styled.span`
  position: absolute;
  bottom: -14px;
  left: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  text-align: center;
  color: ${props => props.theme.colors.error};

    @media screen and (min-width: 768px) {
      font-size: 12px;
      left: 18px;
      bottom: -16px;
    }
`;
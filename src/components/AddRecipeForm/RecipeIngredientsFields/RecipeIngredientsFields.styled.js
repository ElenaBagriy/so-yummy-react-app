import styled from 'styled-components';

export const RecipeIngredStyled = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 362px;
  margin-top: 104px;
  margin-bottom: 36px;

  h3 {
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;
    color: ${props => props.theme.text.primary};
  }

  .counterWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15.65px;
    width: 110px;
    border: 1px solid rgba(51, 51, 51, 0.3);
    border-radius: 18px;
  }

  button {
    padding-left: 10px;
    padding-right: 10px;
    border: none;
    background-color: transparent;
    color: rgba(51, 51, 51, 0.3);
    font-size: 21.6px;
    line-height: 1.2;

    &:hover {
      color: ${props => props.theme.colors.green};
      transform: scale(1.5);
    }
  }

  .counter {
    color: #333333;
  }
`;

export const IngredFieldsStyled = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  select,
  input {
    margin-bottom: 24px;
    background-color: #d9d9d9;
    border: none;
    height: 59px;
    color: #000000;
    opacity: 0.5;
  }

  select {
    margin-right: 35px;

    &:hover,
    &:focus {
      background: #ffffff;
      box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
    }
  }

  .selectIngredients {
    border-radius: 6px;
  }

  input {
    height: 59px;
  }

  .numberInput {
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
  }

  .measureSelect {
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
  }
  input {
    width: 40px;
  }
`;

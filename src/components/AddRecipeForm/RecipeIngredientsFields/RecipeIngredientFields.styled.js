import styled from 'styled-components';
import Select from 'react-select';

export const RecipeIngredStyled = styled.div`
  display: flex;
  justify-content: start;
  gap: 362px;
  margin-top: 104px;
  margin-bottom: 36px;
  max-width: 609px;

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
  margin-bottom: 20px;

  label {
    display: flex;
  }

  input {
    border: 1px solid hsl(0, 0%, 80%);
    border-right: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    width: 30px;
    margin-left: 32px;
  }
`;

export const Label = styled.label`
  /* position: relative;
  display: flex;
  flex-grow: 1;
  width: 100%; */

  &:not(:last-child) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

export const MeasureLabel = styled.label`
  /* display: flex; */
`;

export const StyledSelect = styled(Select)`
  width: 398px;
  font-size: 14px;
  line-height: 1;
  min-height: 59px !important;

  svg {
    fill: ${props => props.theme.colors.green};
  }

  .сustom-select-container {
    position: absolute;
    right: 0;
    top: -8px;
    z-index: 5;
    border: none !important;
    background-color: transparent !important;
  }

  .custom-select__input-container {
    display: flex;
    min-height: 59px !important;
    border: none !important;
  }

  .сustom-select__control .css-13cymwt-control {
    border-style: none !important;
    border: none !important;
    background-color: transparent !important;
    height: 100%;
  }
  /* .сustom-select__control--menu-is-open {
    box-shadow: 0 0 0 3px red;
  }
  .сustom-select__control--is-focused {
    box-shadow: 0 0 0 3px red;
  } */

  .сustom-select__indicator-separator {
    width: 0 !important;
  }
  .сustom-select__value-container {
    padding: 2px 0px 2px 14px;
  }
  .сustom-select__single-value {
    color: ${props => props.theme.colors.green};
    text-align: right;
  }
  .сustom-select__menu {
    background-color: ${props => props.theme.colors.green};
  }
  .сustom-select__menu-list {
    max-height: 210px;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: red;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: red;
      border-radius: 5px;
    }
  }
  .сustom-select__option {
    font-size: 14px;
    line-height: 1.5;
    color: red;
    opacity: 0.5;
    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.green};
      color: red;
      opacity: 1;
    }
  }
  .сustom-select__option--is-selected {
    background-color: ${props => props.theme.colors.green};
    color: red;
    opacity: 1;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    .сustom-select__option {
      font-size: 14px;
    }
  }
`;

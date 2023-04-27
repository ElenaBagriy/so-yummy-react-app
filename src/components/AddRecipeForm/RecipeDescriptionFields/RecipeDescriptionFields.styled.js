import styled from 'styled-components';
import Select from 'react-select';
import { ReactComponent as CloseIcon } from "../../../images/svg/x.svg";
import { ErrorMessage } from '@hookform/error-message';

export const RecipeDescStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 67.07px;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
    margin-bottom: 104px;
  }

  @media screen and (min-width: 1280px) {
    gap: 50px;
  }
`;

export const ImageLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 279px;
  height: 268px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.green};
  transition: background-color ${props => props.theme.hover.transition};
  
  &:hover,
  &:focus {
    background-color: #8baa36db;
  }
  
  @media screen and (min-width: 1280px) {
    width: 357px;
    height: 344px;
  }
`;

export const DefaultImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  cursor: pointer;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const RemoveFileBtn = styled.button`
  display: block;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  z-index: 200;

  & svg path {
    transition: stroke ${props => props.theme.hover.transition};
    stroke: ${props => props.theme.text.primary};
    box-shadow: ${props => props.theme.hover.boxShadow};
  }

  &:hover,
  :focus {
    & svg path{
      stroke: ${props => props.theme.text.accent};
    }
  }
`;

export const IconClose = styled(CloseIcon)`
  display: block;
  width: 20px;
  height: 20px;

    & path {
    transition: stroke ${props => props.theme.hover.transition};
    stroke: ${props => props.theme.text.primary};

    &:hover,
     :focus {
      stroke: ${props => props.theme.text.accent};
    }
  }

  @media screen and (min-width: 1280px) {
    width: 24px;
    height: 24px;
  }
`;

export const InputHidden = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
  opacity: 0;
  cursor: pointer;
`;


export const InputsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px;
  }

  .wrapperCategory {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 18px;
    border-bottom: 1px solid #e0e0e0;
  }

  input {
    border: none;
    border-bottom: 1px solid #e0e0e0;
    background-color: transparent;
    color: #23262a;

    &:hover,
    &:focus {
      outline: none;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  width: 343px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 393px;
  }
`;

export const Input = styled.input`
  padding-bottom: 18px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-color: transparent;
  color: ${props => props.theme.text.heroParagraph};

  &::placeholder {
    color: #000000;
    opacity: 0.5;
  }
`;




export const StyledSelect = styled(Select)`
  width: 123px;
  font-size: 20px;
  line-height: 1;

  svg {
    fill: ${props => props.theme.colors.green};
  }

  &.сustom-select-container {
    /* position: absolute; */
    /* right: 0;
    top: -8px; */
    /* z-index: 5; */
  }

  .сustom-select__control {
    border: none;
    border-width: 0;
    background-color: transparent !important;
  }

  .сustom-select__control--menu-is-open {
    box-shadow: 0 0 0 3px ${props => props.theme.colors.green};
  }

  .сustom-select__control--is-focused {
    box-shadow: 0 0 0 3px ${props => props.theme.colors.green};
  }

  .сustom-select__indicator-separator {
    display: none !important;
    width: 0;
  }

  .сustom-select__value-container {
    padding: 2px 0px 2px 14px;
  }

  .сustom-select__single-value {
    color: green;
    text-align: right;
  }

  .сustom-select__menu {
    background-color: green;
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
      background-color: green;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: green;
      border-radius: 5px;
    }
  }

  .сustom-select__option {
    font-size: 14px;
    line-height: 1.5;
    color: green;
    opacity: 0.5;

    &:hover,
    &:focus {
      background-color: green;
      color: green;
      opacity: 1;
    }
  }

  .сustom-select__option--is-selected {
    background-color: ${props => props.theme.colors.green};
    color: green;
    opacity: 1;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;

    .сustom-select__option {
      font-size: 14px;
    }
  }
`;

// ------ERROR ------
export const Error = styled(ErrorMessage)`
  position: absolute;
  top: ${props => {
    switch (props.type) {
      case 'input':
        return 0;
      case 'select':
        return '20px';
      
      case 'file':
        return '-20px';
      default:
        return;
    }
  }};
  right: ${props => {
    switch (props.type) {
      case 'input':
        return 0;
      default:
        return;
    }
  }};
  left: ${props => {
    switch (props.type) {
      case 'input':
        return;
      case 'select':
        return 0;
      
       case 'file':
        return 0;
      default:
        return;
    }
  }};
  font-family: 'Poppins';
  font-weight: 400;
  color: red;
  font-size: 14px;
  line-height: 1.5;
`;
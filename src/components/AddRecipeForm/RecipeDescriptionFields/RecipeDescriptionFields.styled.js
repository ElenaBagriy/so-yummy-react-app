import styled from 'styled-components';
import Select from 'react-select';
import { ReactComponent as CloseIcon } from "../../../images/svg/x.svg";

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

export const ImageWrapper = styled.div`
  position: relative;
  width: 279px;
  height: 268px;
  overflow: hidden;
  border-radius: 8px;

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
`;

export const WrapperCategory = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 343px;
  height: 40px;
  border-bottom: 1px solid ${props => (props.isError ? '#e74a3b' : '#e0e0e0')};


  @media screen and (min-width: 768px) {
    width: 393px;
    height: 43px;
  }
`;

export const PlaceHolder = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Label = styled.label`
  position: relative;
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
  padding-top: 0;
  border: none;
  border-bottom: 1px solid ${props => (props.isError ? '#e74a3b' : '#e0e0e0')};
  background-color: transparent;
  color: ${props => props.theme.text.heroParagraph};

  &::placeholder {
    color: #000000;
    opacity: 0.5;
  }

  &:focus-visible {
    outline: none;
  }
`;


export const StyledSelect = styled(Select)`
  
  &.react-select-container {
    height: 20px;
  }
  
  .react-select__control {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    height: 20px;
    border: none;
    background-color: transparent;
    outline: 0;
    cursor: pointer;
    min-height: 0;

     input {
    position: absolute;
     &:focus-visible{
      outline: none;
     }
    }
  }

  .react-select__control--is-focused {
    box-shadow: none;
    border: none;
  }

  .react-select__value-container {
    position: relative;
    padding: 4px 0;
    height: 20px;
    display: block;
    @media screen and (min-width: 768px) {
      padding: 3px 0;
    }
  }

  .react-select__single-value {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1;
    color: #000000;
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  .react-select__placeholder {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1;
    color: #000000;
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__indicator {
    padding: 0;
  }

  .react-select__menu {
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
    border-radius: 6px;
    margin-top: 4px;
    margin-bottom: 0;
    padding: 8px 4px 8px 14px;
    background-color: ${props => props.theme.colors.white};
    width: 123px;
    height: 144px;

    @media screen and (min-width: 768px) {
      margin-top: 8px;
      padding: 8px 4px 8px 18px;
      height: 162px;
      width: 132px;
    }
  }

  .react-select__menu-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0;
    max-height: 128px;
    scrollbar-width: none;
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #E7E5E5;
      border-radius: 12px;
    }
    ::-webkit-scrollbar-track {
      background-color: white;
      border-radius: 12px;
    }

    @media screen and (min-width: 768px) {
      max-height: 146px;
    }
  }

  .react-select__option {
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #000000;
    opacity: 0.5;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  .react-select__option--is-focused {
    background-color: ${props => props.theme.colors.lightGreen};

  }

  .react-select__option--is-selected {
    background-color: white;
    color: ${props => props.theme.colors.green};
    opacity: 1;
  }

  svg {
    fill: ${props => props.theme.colors.green};
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
`;

export const ErrorImageMessage = styled.span`
  position: absolute;
  top: -18px;
  left:  50%;
  transform: translateX(-50%);
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  text-align: center;
  color: #e74a3b;

    @media screen and (min-width: 768px) {
      top: -20px;
      font-size: 12px;
    }
`;

export const Error = styled.span`
  position: absolute;
  bottom: 0;
  left: ${props => {
    switch (props.type) {
      case 'input':
        return 0;
      case 'select':
        return 0;
      default:
        return;
    }
  }};
  
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  text-align: center;
  color: #e74a3b;

    @media screen and (min-width: 768px) {
      font-size: 12px;
    }
`;
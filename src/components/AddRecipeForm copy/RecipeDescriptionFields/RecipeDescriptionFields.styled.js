import styled from 'styled-components';
import Select from 'react-select';

export const RecipeDescStyled = styled.div`
  display: flex;
  gap: 50px;
`;

export const InputsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  label {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    width: 393px;
  }

  .wrapperCategory {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 18px;
    border-bottom: 1px solid #e0e0e0;
  }

  span {
    color: #000000;
    opacity: 0.5;
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

export const RemoveFileBtn = styled.button`
  position: absolute;
  top: 7px;
  right: 7px;
  background-color: transparent;
  border: none;
  z-index: 5;
  cursor: pointer;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 270px;
  border-radius: 8px;
  overflow: hidden;

  @media screen and (min-width: 1280px) {
    width: 357px;
    height: 344px;
  }

  .imageBox {
    position: relative;
    display: block;
    width: 279px;
    height: 268px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.green};

    &:hover,
    &:focus {
      background-color: #8baa36db;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 32px;
    }
    @media screen and (min-width: 1280px) {
      width: 357px;
      height: 344px;
    }

    img {
      position: absolute;
    }

    .default {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
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

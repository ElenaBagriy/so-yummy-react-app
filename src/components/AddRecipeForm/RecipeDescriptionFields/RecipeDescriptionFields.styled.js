import styled from 'styled-components';

export const RecipeDescStyled = styled.div`
  display: flex;
  gap: 50px;

  .upload {
    display: none;
  }

  .uploadBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 357px;
    height: 344px;
    border: none;
    background: ${props => props.theme.colors.green};
  }

  .uploadedImage {
    object-fit: cover;
  }

  .deleteBtn {
    border: none;
    background-color: transparent;
    color: ${props => props.theme.colors.white};
  }
  input {
    width: 393px;

    &:focus {
      background-color: transparent;
    }
  }
`;

export const InputsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  label {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    width: 393px;
  }

  .wrapperCategory {
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

  select {
    border: none;
    background-color: transparent;

    &:hover,
    &:focus {
      outline: none;
    }
  }

  option {
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #000000;
    opacity: 0.5;
  }
`;

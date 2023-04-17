import styled from 'styled-components';

export const RecipeDescStyled = styled.div`
  display: flex;
  gap: 50px;

  .upload {
    display: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 357px;
    height: 344px;
    border: none;
    background: ${props => props.theme.colors.green};
  }
`;

export const InputsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

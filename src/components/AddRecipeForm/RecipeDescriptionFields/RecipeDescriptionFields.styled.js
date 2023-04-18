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
    object-fit: contain;
  }

  .deleteBtn {
    border: none;
    background-color: transparent;
    color: ${props => props.theme.colors.white};
  }
`;

export const InputsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

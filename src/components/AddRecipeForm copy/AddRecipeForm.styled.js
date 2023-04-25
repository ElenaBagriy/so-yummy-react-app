import styled from 'styled-components';

export const StyledAddRecipeContainer = styled.div`
  .submitBtn {
    padding: 14px 64px;
    border: transparent;
    border-radius: 24px 44px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.black};
    font-size: 16px;
    line-height: 1.5;

    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.green};
    }
  }
`;


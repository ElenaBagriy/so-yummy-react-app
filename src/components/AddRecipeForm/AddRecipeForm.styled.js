import styled from 'styled-components';

export const SubmitButton = styled.button`
  padding: 12px 48px;
  border: transparent;
  border-radius: 24px 44px;
  color: ${props => props.theme.text.white};
  background-color: ${props => props.theme.button.accent};
  font-size: 16px;
  line-height: 1.5;
  transition: background-color ${props => props.theme.hover.transition}, color ${props => props.theme.hover.transition};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.button.textToDark};
  }

  @media screen and (min-width: 768px) {
    padding: 14px 64px;
  }
`;

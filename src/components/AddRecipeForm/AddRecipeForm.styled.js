import styled from 'styled-components';

export const SubmitButton = styled.button`
  padding: 12px 48px;
  border: transparent;
  border-radius: 24px 44px;
  color: ${props => props.theme.colors.bgMain};
  background-color: ${props => props.theme.colors.black};
  font-size: 16px;
  line-height: 1.5;
  transition: background-color ${props => props.theme.hover.transition};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.green};
  }

  @media screen and (min-width: 768px) {
    padding: 14px 64px;
  }
`;

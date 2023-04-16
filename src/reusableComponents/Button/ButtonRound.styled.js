import styled from 'styled-components';

export default styled.button`
  padding: 12px 24px;
  border-radius: 24px 44px;
  border: 2px solid #8baa36;
  background-color: #8baa36;
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  line-height: 1.31;

  //tablet
  @media screen and (min-width: 768px) {
    padding: 22px 44px;
    font-size: 16px;
    line-height: 1.5;
  }

  //desktop
  @media screen and (min-width: 1440px) {
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.black};
    border-color: ${props => props.theme.colors.black};
  }

  &.outlined {
    background-color: transparent;
    border: 2px solid ${props => props.theme.colors.white};
  }

  &.outlined:hover,
  &.outlined:focus {
    color: ${props => props.theme.colors.green};
    border-color: ${props => props.theme.colors.green};
  }
`;

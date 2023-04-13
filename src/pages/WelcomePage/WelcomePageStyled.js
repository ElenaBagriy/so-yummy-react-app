import styled from 'styled-components';
import img from '../../images/welcomePage/hero-desktop@1x.jpeg';

export const WelcomePageStyled = styled.main`
  padding-top: 214px;
  padding-bottom: 216px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url('${img}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${props => props.theme.colors.white};

  img {
    margin-bottom: 44px;
  }

  h1 {
    margin-bottom: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 28px;
  }

  p {
    width: 540px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 18px;
  }

  li {
  }
`;

export const BtnStyled = styled.button`
  padding: 22px 44px;
  border-radius: 24px 44px;
  border: 2px solid #8baa36;
  background-color: #8baa36;
  color: ${props => props.theme.colors.white};
  font-size: 16px;

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

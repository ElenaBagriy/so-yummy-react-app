import styled from 'styled-components';
import img from '../../images/welcomePage/hero-desktop@1x.jpeg';
import { Link } from 'react-router-dom';

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
  color: #fff;

  img {
    margin-bottom: 44px;
  }

  h1 {
    margin-bottom: 14px;
  }

  p {
    width: 540px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 18px;
  }

  li {
  }
`;

export const LinkStyled = styled(Link)`
  padding: 22px 44px;
  border-radius: 24px 44px;
  border: 1px solid #8baa36;
  background-color: #8baa36;

  &:hover,
  &:focus {
    background-color: #22252a;
    border-color: #22252a;
  }

  &.outlined {
    background-color: transparent;
    border: 1px solid #fff;
  }

  &.outlined:hover,
  &.outlined:focus {
    color: #8baa36;
    border-color: #8baa36;
  }
`;

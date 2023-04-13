import { Link } from 'react-router-dom';
import styled from 'styled-components';
import back from '../../images/welcomePage/background-desktop@2x.png';

export const SigninStyled = styled.div`
  position: relative;
  padding: 155px 180px 196px 113px;
  background-color: ${props => props.theme.colors.white};
  background-image: url('${back}');
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: contain;

  img {
    position: absolute;
    max-width: 532px;
    top: 115px;
    right: auto;
  }

  h2 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    /* margin-left: 760px; */
    margin-left: auto;
    padding: 44px 50px;
    width: 500px;
    /* height: 419px; */
    border-radius: 30px;
    background-color: #2a2c36;
    color: ${props => props.theme.colors.white};
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  }

  label:not(:nth-child(3)) {
    margin-bottom: 24px;
  }

  label {
    position: relative;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 18px;
    transform: translateY(-50%);
  }

  input {
    width: 400px;
    height: 59px;
    padding-top: 16px;
    padding-left: 50px;
    padding-bottom: 16px;
    border: 1px solid #fafafa;
    border-radius: 6px;
    background-color: transparent;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.white};
  }

  button {
    height: 59px;
    margin-top: 50px;
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.white};
    border-radius: 6px;
    border: none;

    &:hover,
    &:focus {
      color: ${props => props.theme.colors.black};
    }
  }

  .error {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #e74a3b;
  }
`;

export const LinkStyled = styled(Link)`
  display: block;
  margin-top: 18px;
  margin-left: 970px;
  /* margin-left: auto; */
  margin-right: 374px;
  text-decoration: underline;
  color: ${props => props.theme.colors.white};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.green};
  }
`;

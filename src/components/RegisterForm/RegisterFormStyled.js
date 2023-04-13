import { Link } from 'react-router-dom';
import styled from 'styled-components';
import back from '../../images/welcomePage/background-desktop@2x.png';

export const RegisterStyled = styled.div`
  position: relative;
  padding: 122px 180px 163px 113px;
  background-color: ${props => props.theme.colors.white};
  background-image: url('${back}');
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: contain;

  img {
    position: absolute;
    max-width: 532px;
    top: 115px;
    left: 113px;
  }

  label:not(:nth-child(4)) {
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
    color: ${props => props.theme.colors.white};
  }

  h2 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 32px;
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

  form {
    display: flex;
    flex-direction: column;
    margin-left: 760px;
    /* margin-left: auto; */
    padding: 44px 50px;
    width: 500px;
    height: 484px;
    border-radius: 30px;
    background-color: #2a2c36;
    color: ${props => props.theme.colors.white};
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  }
`;

export const LinkStyled = styled(Link)`
  display: block;
  margin-top: 18px;
  margin-left: 970px;
  margin-right: auto;
  text-decoration: underline;
  color: ${props => props.theme.colors.white};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.green};
  }
`;

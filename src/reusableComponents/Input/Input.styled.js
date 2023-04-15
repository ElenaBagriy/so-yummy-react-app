import styled, { css } from 'styled-components';

export default styled.input`
  width: 279px;
  height: 45px;
  padding-top: 12px;
  padding-left: 12px;
  padding-bottom: 12px;
  border: 1px solid #fafafa;
  border-radius: 6px;
  background-color: transparent;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: white;
  ${props =>
    props.$icon &&
    css`
      padding-left: 40px;
    `}

  ${props =>
    props.$grey &&
    css`
      border-color: #f0f0f0;
      color: #3e4462;
    `}

  //tablet
  @media screen and (min-width: 768px) {
    padding-top: 16px;
    padding-left: 16px;
    padding-bottom: 16px;
    min-width: 400px;
    height: 59px;
    font-size: 18px;
    line-height: 1.5;
    ${props =>
      props.$icon &&
      css`
        padding-left: 50px;
      `}
  }

  //desktop
  @media screen and (min-width: 1440px) {
  }
`;

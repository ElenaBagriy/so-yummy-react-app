import { FormHelperText } from '@mui/material';
import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledSubscribeForm = styled(Form)`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.bgMain};
  @media screen and (min-width: 768px) {
    max-width: 442px;
    margin: 0 133px;
    margin-top: 72px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 339px;
    margin: 0;
  }

  h3 {
    @media screen and (min-width: 768px) {
      display: none;
    }
    @media screen and (min-width: 1440px) {
      display: block;
      font-weight: 700;
      font-size: 18px;
      line-height: 1.5;
      margin-bottom: 14px;
    }
  }
  p {
    @media screen and (min-width: 768px) {
      display: none;
    }
    @media screen and (min-width: 1440px) {
      display: block;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.29;
      letter-spacing: -0.02em;
      margin-bottom: 28px;
    }
  }
`;
export const SubscribeInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const StyledEmailLabel = styled.label`
  position: relative;
`;

export const StyledEmailInput = styled(Field)`
  display: inline-block;
  width: 100%;
  /* padding: 18px 50px; */
  background-color: transparent;
  border: 1px solid rgba(250, 250, 250, 0.16);
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.bgMain};
  &:hover,
  :focus {
    border-color: rgb(250, 250, 250);
  }
  @media screen and (min-width: 768px) {
    padding: 14.5px 40px 14.5px 50px;
    min-width: 259px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
  }
  @media screen and (min-width: 1440px) {
    padding: 18px 50px;
    min-width: 259px;
  }
`;
export const EmailSVG = styled.svg`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 16px;
    left: 15px;
  }
`;
export const SubscribeBtn = styled.button`
  text-align: center;
  padding: 14px;
  background-color: ${props => props.theme.colors.green};
  border: none;
  border-radius: 6px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: #fafafa;

  @media screen and (min-width: 768px) {
    padding: 18px;
    font-size: 16px;
    line-height: 1.12;
    padding: 16px 50px;
  }

  &:disabled {
    background-color: ${props => props.theme.colors.grey};
    color: ${props => props.theme.text.heroParagraph};
  }
`;

export const HelperText = styled(FormHelperText)`
  &.MuiFormHelperText-root {
    display: block;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    text-align: center;
    position: absolute;
    padding: 0 38px;
    margin-left: 14px;
    color: #e74a3b;
  }
`;
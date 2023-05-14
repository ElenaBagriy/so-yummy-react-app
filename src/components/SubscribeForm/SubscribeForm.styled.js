import styled from 'styled-components';
import { FormHelperText } from '@mui/material';
import { Field, Form } from 'formik';
import { ReactComponent as EmailSVG } from '../../images/svg/mail.svg';

export const StyledSubscribeForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 204px;
  color: ${({ theme }) => theme.colors.bgMain};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    width: 338px;
  }
`;

export const CallToAction = styled.strong`
      display: none;

    @media screen and (min-width: 1280px) {
      display: block;
      font-weight: 700;
      font-size: 18px;
      line-height: 1.5;
      margin-bottom: 14px;
      color: ${props => props.theme.colors.bgMain};
    }
`;

export const SubscribeText = styled.p`
    display: none;

    @media screen and (min-width: 1280px) {
      display: block;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.29;
      letter-spacing: -0.02em;
      margin-bottom: 28px;
      color: ${props => props.theme.colors.bgMain};
    }
`;

export const SubscribeInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }

  @media screen and (min-width: 1280px) {
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
  padding-left: 42px;
  height: 38px;
  
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.bgMain};
  background-color: transparent;
  border: 1px solid rgba(250, 250, 250, 0.16);
  border-radius: 6px;
  transition: border-color ${props => props.theme.hover.transition};

  &::placeholder {
    color: ${({ theme }) => theme.colors.bgMain};
  };

  &:hover,
  :focus,
  :focus-visible {
    border-color: rgba(250, 250, 250);
    outline: none;
  };

  &:not(:placeholder-shown) { 
    border-color: ${props => (props.error ? '#e74a3b' : 'rgba(250, 250, 250)')};
  }

  @media screen and (min-width: 768px) {
    padding-left: 51px;
    width: 259px;
    height: 50px;
    font-size: 14px;
  };

  @media screen and (min-width: 1280px) {
    height: 59px;
    width: 338px;
    font-size: 18px;
  }
`;

export const EmailIcon = styled(EmailSVG)`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  width: 16px;
  height: 12px;

  & path {
    stroke: ${props => (props.error ? '#E74A3B' : '#fafafa')};
  }
  
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 16px;
    left: 15px;
  }
`;

export const SubscribeBtn = styled.button`
  text-align: center;
  padding: 11px;
  background-color: ${props => props.theme.button.background};
  border: none;
  border-radius: 6px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  color: ${props => props.theme.colors.bgMain};
  transition: color ${props => props.theme.hover.transition};

  &:hover,
  :focus {
    color: ${({ theme }) => theme.button.accent};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.grey};
    color: ${props => props.theme.text.favorite};
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
    padding: 16px 50px;
  }
  @media screen and (min-width: 1280px) {
    padding: 21px;
    height: 60px;
  }
`;

export const HelperText = styled(FormHelperText)`
  &.MuiFormHelperText-root {
    position: absolute;
    top: -14px;
    display: block;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 8px;
    line-height: 1.5;
    text-align: center;
    padding-left: 42px;
    color: ${props => props.theme.colors.error};

    @media screen and (min-width: 768px) {
      top: -18px;
      font-size: 12px;
      padding-left: 51px;
    }

    @media screen and (min-width: 1280px) {
      top: -20px;
      font-size: 12px;
      padding-left: 51px;
    }
  }
`;

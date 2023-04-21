import { FormHelperText } from "@mui/material";
import styled from "styled-components";

export const Form = styled.form`
  margin: 0 auto;
  position: relative;
  width: 295px;

  @media screen and (min-width: 768px) {
    margin: 0;
    width: 362px;
  }

  //desktop
  @media screen and (min-width: 1280px) {
    width: 510px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 17px 113px 17px 32px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${(props) => props.theme.text.heroParagraph};
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.input.normal};
  border-radius: 24px 44px;

  &:focus-visible {
    outline: none;
    border: 1px solid ${(props) => props.theme.input.active};
  }

  &::placeholder {
    color: ${(props) => props.theme.text.grey};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 17px 161px 17px 38px;
  }

  //desktop
  @media screen and (min-width: 1280px) {
    padding: 22px 161px 22px 48px;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  padding: 16px 32px;
  border-radius: 24px 44px;
  background-color: ${(props) => props.theme.colors[props.$color || "black"]};
  color: ${(props) => props.theme.colors.bgMain};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  border: none;
  transition: background-color ${(props) => props.theme.hover.transition};

  //tablet
  @media screen and (min-width: 768px) {
    padding: 18px 52px;
    font-size: 16px;
  }

  //desktop
  @media screen and (min-width: 1280px) {
    padding: 23px 52px;
  }

  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.theme.colors[props.$color === "green" ? "black" : "green"]};
  }
`;

export const HelperText = styled(FormHelperText)`
  &.MuiFormHelperText-root {
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

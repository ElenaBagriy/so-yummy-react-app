import styled, { css } from "styled-components";
import { ReactComponent as ArrowDown } from "../../images/commonImages/arrowDown.svg";

export const SelectContainer = styled.div`
  position: relative;
  display: inline-flex;

  z-index: 100;
`;

export const SelectLabelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 200px;
  width: auto;
  padding: 14px;

  background-color: ${(props) => props.theme.select.grey};
  border: none;
  border-radius: 6px;
  outline: none;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-transform: capitalize;
  color: ${(props) => props.theme.select.color};

  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.select.greyHover};
  }

  ${(p) =>
    p.isVisible &&
    css`
      background-color: ${(props) => props.theme.select.greyHover};
    `}
`;

export const DropdownStyle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 110%;
  left: 0;
  max-height: 200px;
  width: 100%;
  margin-bottom: 10px;
  margin-right: 4px;

  background-color: ${(props) => props.theme.colors.bgMain};
  border-radius: 0px 0px 6px 6px;

  overflow: auto;
  z-index: 199;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: none;

    background-color: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e7e5e5;
    border-radius: 12px;
  }

  ${(p) =>
    p.isVisible !== true &&
    css`
      max-height: 40px;
      visibility: hidden;
    `}
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 14px;

  border-radius: 6px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-transform: capitalize;
  color: ${(props) => props.theme.select.color};

  cursor: pointer;

  ${(p) =>
    p.active &&
    css`
      color: ${(props) => props.theme.colors.green};
      font-weight: 500;
    `}
  &:hover, :focus, :focus:hover {
    background-color: ${(props) => props.theme.colors.green};
    outline: none;

    color: ${(props) => props.theme.colors.white};
  }
`;

export const Arrow = styled(ArrowDown)`
  margin-left: 10px;
`;

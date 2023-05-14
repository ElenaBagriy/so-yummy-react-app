import styled from "styled-components";
import { ReactComponent as CheckIcon } from "images/svg/checkbox.svg";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.checkBox};
  border-radius: 4px;
  ${(p) => p.theme.sizes.tablet} {
    border: 2px solid ${props => props.theme.colors.checkBox};
    width: 35px;
    height: 35px;
  };
  transition: border-color ${props => props.theme.hover.transition}, box-shadow ${props => props.theme.hover.transition};

  &:hover,
  :focus {
    border-color: ${props => props.theme.colors.green};
    box-shadow: ${props => props.theme.hover.boxShadow};
  }
`;

export const SvgCheck = styled(CheckIcon)`
  width: 8.74px;
  height: 8.74px;
  margin: 0 auto;
  ${(p) => p.theme.sizes.tablet} {
    width: 17px;
    height: 17px;
  }
`;

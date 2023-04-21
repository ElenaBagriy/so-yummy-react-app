import styled from "styled-components";
import { ReactComponent as CheckIcon } from "images/svg/checkbox.svg";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  cursor: pointer;
  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;
  ${(p) => p.theme.sizes.tablet} {
    border: 2px solid rgba(126, 126, 126, 0.5);
    width: 35px;
    height: 35px;
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

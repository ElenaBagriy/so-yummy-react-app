import styled from 'styled-components';
import { ReactComponent as EditSvg } from "../../images/svg/edit.svg";

export const UserModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 161px;
  height: 130px;
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  border: ${props => props.theme.border.modal};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    width: 177px;
    height: 134px;
  }
`;

export const EditProfileButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: transparent;

  text-align: left;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;

  color: ${({ theme }) => theme.text.header};
  transition: color ${props => props.theme.hover.transition};

  &:hover,
    :focus {
    color: ${props => props.theme.colors.green};
    & svg path{
      stroke: ${props => props.theme.colors.green};
    }
  };

  & svg path{
    transition: stroke ${props => props.theme.hover.transition};
    stroke: ${props => props.theme.text.header};
    box-shadow: ${props => props.theme.hover.boxShadow};
  }
`;

export const EditIcon = styled(EditSvg)`
      & path {
    transition: stroke ${props => props.theme.hover.transition};
    stroke: ${props => props.theme.text.header};

    &:hover,
     :focus {
      stroke: ${props => props.theme.colors.green};
    }
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  padding: 12px 24px;
  border-radius: 24px 44px;
  border: none;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.bgMain};
  transition: background-color ${props => props.theme.hover.transition}, box-shadow ${props => props.theme.hover.transition}, color ${props => props.theme.hover.transition}, stroke ${props => props.theme.hover.transition};

  &:hover,
    :focus {
    background-color: ${props => props.theme.button.accent};
    box-shadow: ${props => props.theme.hover.boxShadow};
    color: ${props => props.theme.button.textToDark};

    & svg {
      stroke: ${props => props.theme.button.textToDark};
    }
  }

  @media screen and (min-width: 768px) {
    padding: 12px 32px;
  }
`;

export const SVG = styled.svg`
  stroke: ${props => props.theme.colors.bgMain};
  transition: stroke ${props => props.theme.hover.transition};
`;

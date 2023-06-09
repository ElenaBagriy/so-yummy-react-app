import styled from 'styled-components';
import { Avatar, Backdrop } from '@mui/material';
import { ReactComponent as CloseIcon } from "../../images/svg/x.svg";
import { ReactComponent as PlusIcon } from "../../images/svg/plus.svg";

export const StyledBackdrop = styled(Backdrop)`
  &.MuiBackdrop-root {
    background-color: transparent;
  }
`;

export const EditProfileWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 330px;
  height: 327px;
  padding: 32px 24px;

  background-color: ${props => props.theme.colors.backgroundSecondary};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 402px;
    padding: 50px 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 500px;
    height: 425px;
    padding: 60px 50px;
  }
`;

export const EditProfileCloseButton = styled.button`
  display: block;
  position: absolute;
  top: 18px;
  right: 18px;
  width: 20px;
  height: 20px;

  border: none;
  background-color: transparent;
    & svg path{
    transition: stroke ${props => props.theme.hover.transition};
    stroke: ${props => props.theme.text.main};
    box-shadow: ${props => props.theme.hover.boxShadow};
  }

    &:hover,
     :focus {
      & svg path{
      stroke: ${props => props.theme.colors.green};
    }}

  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
    width: 24px;
    height: 24px;
  }
`;

export const IconClose = styled(CloseIcon)`
  display: block;
  width: 20px;
  height: 20px;

    & path {
    transition: stroke ${props => props.theme.hover.transition};
    stroke: ${props => props.theme.text.main};

    &:hover,
     :focus {
      stroke: ${props => props.theme.colors.green};
    }
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const StyledEditProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const StyledAvatarLabel = styled.label`
  position: relative;
`;

export const StyledAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    width: 88px;
    height: 88px;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      width: 103px;
      height: 103px;
    }
  }
`;

export const StyledFileInput = styled.input`
  display: none;
`;

export const PlusSVG = styled(PlusIcon)`
  position: absolute;
  bottom: 0;
  right: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  fill: ${props => props.theme.colors.green};
  transition: fill ${props => props.theme.hover.transition};

    &:hover,
     :focus {
      fill: ${props => props.theme.colors.black};
    }

`;

export const SimpleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const StyledNameInput = styled.input`
  display: inline-block;
  width: 100%;
  padding: 14px 40px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.input.text};
  border-radius: 6px;
  color: ${props => props.theme.input.text};
  opacity: 0.8;
  transition: border-color ${props => props.theme.hover.transition}, color ${props => props.theme.hover.transition};

  &:focus-visible {
    outline: 2px solid ${props => props.theme.input.active};
    border: 1px solid ${props => props.theme.colors.white};
}

  @media screen and (min-width: 768px) {
    padding: 16px 51px;
  }
`;

export const StyledNameLabel = styled.label`
  position: relative;

      &:hover,
     :focus {
      svg{
        stroke: ${props => props.theme.text.accent};
      }
      input {
        border-color: ${props => props.theme.text.accent};
      }
    }
`;

export const UserSVG = styled.svg`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  stroke: ${props => props.theme.text.main};
  opacity: 0.8;
  transition: stroke ${props => props.theme.hover.transition};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    left: 19px;
  }

    &:hover,
     :focus {
      stroke: ${props => props.theme.text.accent};
    }
`;

export const EditSVG = styled.svg`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  width: 17px;
  height: 17px;
  stroke: ${props => props.theme.text.main};
  opacity: 0.8;
  transition: stroke ${props => props.theme.hover.transition};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    right: 19px;
  }

      &:hover,
     :focus {
      stroke: ${props => props.theme.text.accent};
    }
`;

export const SaveChangesBtn = styled.button`
  text-align: center;
  padding: 14px;
  background: #8baa36;
  border: none;
  border-radius: 6px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: #fafafa;
  transition: background-color ${props => props.theme.hover.transition}, box-shadow ${props => props.theme.hover.transition}, color ${props => props.theme.hover.transition};
  &:disabled {
    background-color: ${props => props.theme.colors.grey};
  }

  @media screen and (min-width: 768px) {
    padding: 18px;
    font-size: 16px;
    line-height: 1.12;
  }

      &:hover,
     :focus {
      background-color: ${props => props.theme.button.accent};
      box-shadow: ${props => props.theme.hover.boxShadow};
      color: ${props => props.theme.button.textToDark};
    }
`;

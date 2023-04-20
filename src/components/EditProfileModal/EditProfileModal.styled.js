import { Avatar, Backdrop } from '@mui/material';
import styled from 'styled-components';

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

  background-color: #fafafa;
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

export const PlusSVG = styled.svg`
  position: absolute;
  bottom: 0;
  right: 10px;

  cursor: pointer;

  width: 24px;
  height: 24px;
`;

export const SimpleDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
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
  border: 1px solid #23262a;
  border-radius: 6px;
  @media screen and (min-width: 768px) {
    padding: 16px 51px;
  }
`;

export const StyledNameLabel = styled.label`
  position: relative;
`;

export const UserSVG = styled.svg`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    left: 19px;
  }
`;

export const EditSVG = styled.svg`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  width: 17px;
  height: 17px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    right: 19px;
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
  @media screen and (min-width: 768px) {
    padding: 18px;
    font-size: 16px;
    line-height: 1.12;
  }
`;

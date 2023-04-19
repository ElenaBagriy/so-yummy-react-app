import styled from 'styled-components';
import editSVG from 'images/svg/edit.svg';

export const UserModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 161px;
  height: 130px;
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.bgMain};
  border-radius: 8px;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    width: 177px;
    height: 134px;
  }
`;

export const EditProfileButton = styled.button`
  border: none;
  background-color: transparent;
  background-image: url(${editSVG});
  background-repeat: no-repeat;
  background-position: right;

  text-align: left;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;

  color: ${({ theme }) => theme.text.heroParagraph};
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  border-radius: 24px 44px;
  border: none;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.bgMain};

  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    padding: 12px 32px;
  }
`;

import styled from 'styled-components';

export const Avatar = styled.div`
  display: block;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: red;
  margin-right: 14px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
export const UserLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
  @media screen and (min-width: 768px) {
    margin-right: 50px;
  }
`;
export const StyledUserName = styled.p`
  /* font-family: 'Poppins', sans-serif; */
  font-weight: 600;
  font-size: 12px;
  line-height: 1.7;
  color: ${({ theme }) => theme.text.hero};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

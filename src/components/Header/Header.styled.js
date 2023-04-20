import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  z-index: 200;
  margin-top: 18px;
  margin-bottom: -58px;
  @media screen and (min-width: 768px) {
    margin-bottom: -62px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 1280px) {
    justify-content: normal;
  }
`;
export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 137px;
  @media screen and (min-width: 768px) {
    min-width: 183px;
  }
  @media screen and (min-width: 1280px) {
    min-width: 212px;
  }
`;

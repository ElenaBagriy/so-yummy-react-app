import styled from "styled-components";

export const List = styled.ul`
width: 100%;
`;

export const ListItemHeader = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  width: 100%;
  margin-bottom: 24px;
  background-color: ${(p) => p.theme.colors.green};
  border-radius: 8px;
  ${(p) => p.theme.sizes.tablet} {
    padding: 21px 32px;
  }
  ${(p) => p.theme.sizes.desktop} {
    padding: 21px 40px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 38px;
  };

  @media screen and (min-width: 1280px) {
    gap: 109px;
  }
`;

export const ListHeaderText = styled.p`
  font-family: 'Poppins', sans-serif;
  color: ${(p) => p.theme.colors.bgMain};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.xxxs};
  line-height: 1.5;
  letter-spacing: 0.03em;
  ${(p) => p.theme.sizes.tablet} {
    font-size: ${(p) => p.theme.fontSizes.sm};
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14.5px 29px 14px 14px;
  background: ${(p) => p.theme.colors.lightGreen};
  border-radius: 8px;
   &:not(:last-child) {
    margin-bottom: 16px;
    ${(p) => p.theme.sizes.tablet} {
      margin-bottom: 24px;
    }
  }
  ${(p) => p.theme.sizes.tablet} {
    padding: 33px 58px 33px 40px;
  }
  ${(p) => p.theme.sizes.desktop} {
    padding: 27px 70px 27px 58px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  };

  @media screen and (min-width: 1280px) {
    gap: 66px;
  }
`;

export const Img = styled.img`
  width: 57px;
  height: 57px;
  ${(p) => p.theme.sizes.tablet} {
    width: 112px;
    height: 112px;
  }
  ${(p) => p.theme.sizes.desktop} {
    width: 128px;
    height: 128px;
  }
`;

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.xxs};
  line-height: 1.17;
  letter-spacing: -0.24px;
  color: ${(p) => p.theme.text.primary};
  ${(p) => p.theme.sizes.tablet} {
    font-size: ${(p) => p.theme.fontSizes.m};
    line-height: 1;
  }
`;

export const Measure = styled.span`
font-family: 'Poppins', sans-serif;
  color: ${(p) => p.theme.colors.bgMain};
  padding: 4px;
  background-color: ${(p) => p.theme.colors.green};
  border-radius: 4px;
  font-size: ${(p) => p.theme.fontSizes.xxxs};
  line-height: 1.5;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  ${(p) => p.theme.sizes.tablet} {
    padding: 4px 8px;
    font-size: ${(p) => p.theme.fontSizes.sm};
  }
`;


export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media screen and (min-width: 768px) {
    gap: 78px;
  };

  @media screen and (min-width: 1280px) {
    gap: 151px;
  }
`;
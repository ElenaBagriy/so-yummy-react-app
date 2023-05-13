import styled from "styled-components";

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  gap: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 96px;
    gap: 50px;
  };

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: flex-start;
    padding-top: 100px;
  }

`;

export const Title = styled.h2`
  font-family: 'Poppins',sans-serif;
  font-weight: 600;
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.primary};
  ${(p) => p.theme.sizes.tablet} {
    letter-spacing: -0.24px;
  }
`;

export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  font-size: ${(p) => p.theme.fontSizes.xxs};
  line-height: 1.17;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xs};
    line-height: 1.29;
  };
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 768px) {
    gap: 18px;
  };
`;

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  ${(p) => p.theme.sizes.tablet} {
    gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    flex-grow: 1;
  }
`;

export const SpanBox = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  min-width: 21px;
  min-height: 21px;
  color: white;
`;

export const Span = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1.5;
  border-radius: 50%;
  display: block;

  background: ${(p) => p.theme.colors.green};
  ${(p) => p.theme.flexCentered};
`;

export const ImageWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    background-color: red;
    border-radius: 8px;
    width: 343px;
    height: 250px;

  @media screen and (min-width: 768px) {
    width: 433px;
    min-width: 433px;
    height: 332px;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: 433px;
    height: 332px;
  }
`;

export const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 8px;
`;

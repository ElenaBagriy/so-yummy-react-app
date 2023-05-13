import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Arrow } from "../../images/mainPage/arrowLink.svg";

export const Hero = styled.section`
    position: relative;
    text-align: center;
    padding-top: 132px;
    padding-bottom: 83px;

    @media screen and (min-width: 768px) {
      text-align: start;
      padding-top: 204px;
      padding-bottom: 195px;
    };
  
    @media screen and (min-width: 1280px) {
      padding-top: 226px;
      padding-bottom: 268px;
    }
`;

export const Title = styled.h1`
    margin-bottom: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 60px;
    line-height: 1;
    letter-spacing: -0.005em;
    color: ${props => props.theme.text.hero};

    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
      font-size: 72px;
    };
  
    @media screen and (min-width: 1280px) {
      margin-bottom: 14px;
      font-size: 100px;
    }
`;

export const Accent = styled.span`
    color: ${props => props.theme.colors.green};
`;

export const Paragraph = styled.p`
    margin: 0 auto 364px;
    width: 248px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${props => props.theme.text.heroParagraph};
    
    @media screen and (min-width: 768px) {
      margin: 0 0 32px;
      padding-left: 6px;
      width: 362px;
    };
  
    @media screen and (min-width: 1280px) {
      margin: 0 0 50px;
      width: 465px;
      font-size: 18px;
      line-height: 1.33;
    }
`;

export const ProductBlock = styled.div`
    position: absolute;
    right: 34px;
    bottom: 250px;
    padding: 8px;
    width: 225px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.bgMain};

    @media screen and (min-width: 768px) {
        right: 33px;
        bottom: 168px;
        padding: 12px;
        width: 260px;
        background-color: ${props => props.theme.colors.white};
    };
  
    @media screen and (min-width: 1280px) {
        right: 122px;
        bottom: 224px;
        padding: 16px;
        width: 298px;
    }
`;

export const Text = styled.p`
    text-align: start;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.024em;
    color: ${props => props.theme.text.primary};   

    @media screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 1.29;
    };
  
    @media screen and (min-width: 1280px) {
        line-height: 1.43;
    }
`

export const Link = styled(NavLink)`
    margin-top: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: ${props => props.theme.text.primary}; 
    transition: color ${props => props.theme.hover.transition};
    
    &:hover,
     :focus {
      color: ${props => props.theme.text.accent}; 

      & path {
        stroke: ${props => props.theme.text.accent};
      }
     }
`;

export const ArrowLink = styled(Arrow)`
  
  & path {
    transition: stroke ${props => props.theme.hover.transition};
    stroke: ${props => props.theme.text.primary};

    &:hover,
     :focus {
      stroke: ${props => props.theme.text.accent};
    }
  }
`;
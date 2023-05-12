import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import backMob from '../../images/welcomePage/background-mobile.png';
import backMob2x from '../../images/welcomePage/background-mobile@2x.png';
import backTabl from '../../images/welcomePage/background-tablet.png';
import backTabl2x from '../../images/welcomePage/background-tablet@2x.png';
import backDesktop from '../../images/welcomePage/background-desktop.png';
import backDesktop2x from '../../images/welcomePage/background-desktop@2x.png';
import imgMob from '../../images/welcomePage/Order-mobile@1x-min.png';
import imgMob2x from '../../images/welcomePage/Order-mobile@2x-min.png';
import imgTabl from '../../images/welcomePage/Order-tablet@1x-min.png';
import imgTabl2x from '../../images/welcomePage/Order-tablet@2x-min.png';
import imgDesktop from '../../images/welcomePage/Order-desktop@1x-min.png';
import imgDesktop2x from '../../images/welcomePage/Order-desktop@2x-min.png';
import { ErrorMessage, Field, Form } from 'formik';

const setFocusColor = (props) => {
  const { error, touched } = props;
  if (error === "Your password is little secure" && touched) {
    return "#F6C23E"
  }
  if (error && touched) {
        return "#E74A3B"
      } else if (!error && touched) {
        return "#3CBC81"
      } else {
        return "white"
      }
};

export const Section = styled.section`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-top: 305px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 59px;
  background-color: ${props => props.theme.colors.white};
  background-image: url('${backMob}');
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${backMob2x});
  }

  //tablet
  @media screen and (min-width: 768px) {
    padding-top: 444px;
    background-image: url(${backTabl});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${backTabl2x});
  }

  //desktop
  @media screen and (min-width: 1280px) {
    padding-top: 115px;
    background-image: url(${backDesktop});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1280px),
    screen and (min-resolution: 192dpi) and (min-width: 1280px),
    screen and (min-resolution: 2dppx) and (min-width: 1280px) {
    background-image: url(${backDesktop2x});
  }
`;

export const SVG = styled.svg`
    position: absolute;
    top: 50%;
    left: 18px;
    transform: translateY(-50%);
    stroke: ${props => props.color};
`;

export const InfoSVG = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 19px;
  transform: translateY(-50%);
`;

export const Error = styled(ErrorMessage)`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  position: absolute;
  color: ${props => props.color};
`;

export const Label = styled.label`
  position: relative;
  &:not(:nth-child(3)) {
    margin-bottom: 12px;
    
    //tablet
    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }
`;

export const Input = styled(Field)`
    width: 279px;
    height: 45px;
    padding-top: 12px;
    padding-left: 40px;
    padding-bottom: 12px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 6px;
    background-color: transparent;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.white};

    &::placeholder {
      color: ${props => props.theme.colors.white};
      opacity: 0.8;
    }

    &:focus-visible {
      outline: none;
      border-color: white;
      border-color: ${props => setFocusColor(props)};
    }
    
    //tablet
    @media screen and (min-width: 768px) {
      padding-top: 16px;
      padding-left: 50px;
      padding-bottom: 16px;
      min-width: 400px;
      height: 59px;
      font-size: 18px;
      line-height: 1.5;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
    margin-top: 28px;
    font-size: 16px;
    line-height: 1.12;
    border-radius: 6px;
    border: none;
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.white};

    transition: color ${props => props.theme.hover.transition};
    
    &:hover,
    &:focus {
      color: ${props => props.theme.colors.black};
    }
    
    //tablet
    @media screen and (min-width: 768px) {
      height: 59px;
      margin-top: 50px;
    }
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
    padding: 32px 28px 40px;
    width: 335px;
    border-radius: 30px;
    background-color: #2a2c36;
    color: ${props => props.theme.colors.white};
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
    z-index: 2;

    //tablet
    @media screen and (min-width: 768px) {
      width: 500px;
      padding: 44px 50px;
    }
`;
  
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LinkStyled = styled(NavLink)`
  text-decoration: underline;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: ${props => props.theme.colors.white};
  transition: color ${props => props.theme.hover.transition};
  
  //tablet
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.green};
  }
  `;

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.17;
  margin-bottom: 18px;
  letter-spacing: -0.02em;

  //tablet
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 28px;
    line-height: 1.07;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: -218px;
  right: 50%;
  transform: translateX(50%);
  width: 285px;
  height: 250px;
  background-image: url('${imgMob}');
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${imgMob2x});
  }

    //tablet
  @media screen and (min-width: 768px) {
    top: -348px;
    width: 409px;
    height: 359px;
    background-image: url(${imgTabl});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${imgTabl2x});
  }

  //desktop
  @media screen and (min-width: 1280px) {
    position: static;
    transform: translateX(0);
    width: 532px;
    height: 468px;
    background-image: url(${imgDesktop});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1280px),
    screen and (min-resolution: 192dpi) and (min-width: 1280px),
    screen and (min-resolution: 2dppx) and (min-width: 1280px) {
    background-image: url(${imgDesktop2x});
  }
  `;

export const Container = styled.div`
  position: relative;

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 115px;
  }
`;
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as TrashIcon } from '../../images/favoritePage/trash-01.svg';

export const Section = styled.main`
    padding-top: 114px;
    padding-bottom: 100px;

    @media screen and (min-width: 768px) {
      padding-top: 136px;
      padding-bottom: 200px;
    };

    @media screen and (min-width: 1280px) {
      padding-top: 164px;
      padding-bottom: 100px;
    };
`;

export const RecipesList = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    gap: 40px;
  };

  @media screen and (min-width: 1280px) {
    gap: 50px;
  };
`;

export const RecipesItem = styled.li`
  position: relative;
  padding: 14px 41px 14px 9px;
  width: 100%;
  display: flex;
  gap: 14px;
  width: 100%;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.white};

  @media screen and (min-width: 768px) {
    padding: 28px 130px 28px 24px;
    gap: 24px;
  };

  @media screen and (min-width: 1280px) {
    padding: 40px 163px 40px 40px;
    gap: 40px;
  };
`;

export const Image = styled.img`
  border-radius: 8px;
  width: 124px;
  height: 124px;
  background-color: ${props => props.theme.colors.white};

  @media screen and (min-width: 768px) {
    width: 228px;
    height: 232px;
  };

  @media screen and (min-width: 1280px) {
    width: 318px;
    height: 324px;
  };
`;

export const Title = styled.h3`
  margin-bottom: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${props => props.theme.text.primary};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 28px;
  };

  @media screen and (min-width: 1280px) {
    margin-bottom: 50px;
  };
`;

export const Description = styled.p`
  max-height: 57px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 8px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: ${props => props.theme.text.heroParagraph};

  @media screen and (min-width: 768px) {
    max-height: 73px;
    font-size: 14px;
    line-height: 1.29;
  };

  @media screen and (min-width: 1280px) {
    max-height: 134px;
    font-size: 18px;
    line-height: 1.33;
  };
`;

export const Time = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;
  color: ${props => props.theme.text.primary};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.43;
  };

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    line-height: 1.33;
  };
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    
  };

  @media screen and (min-width: 1280px) {
    
  };
`;

export const TextWrapper = styled.div`
  /* max-width: 155px; */

  @media screen and (min-width: 768px) {
    /* max-width: 298px; */
  };

  @media screen and (min-width: 1280px) {
    /* max-width: 679px; */
  };
`;

export const BottomWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    
  };

  @media screen and (min-width: 1280px) {
    
  };
`;

export const Link = styled(NavLink)`
  position: absolute;
  bottom: 14px;
  right: 9px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 87px;
  height: 27px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.bgMain};
  border-radius: 24px 44px;
  transition: color ${props => props.theme.hover.transition}, background-color ${props => props.theme.hover.transition};

  &:hover,
  :focus {
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.bgMain};
  };

    @media screen and (min-width: 768px) {
        bottom: 28px;
        right: 24px;
        width: 138px;
        height: 45px;
        font-size: 14px;
    };

    @media screen and (min-width: 1280px) {
        bottom: 40px;
        right: 40px;
        width: 160px;
        height: 54px;
        font-size: 16px;
    }
`;

export const DeleteButton = styled.button`
    position: absolute;
    top: 14px;
    right: 9px;
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.green};
    stroke: ${props => props.theme.colors.white};
    transition: background-color ${props => props.theme.hover.transition}, stroke ${props => props.theme.hover.transition};

    @media screen and (min-width: 768px) {
      top: 28px;
      right: 24px;
      width: 38px;
      height: 38px;
    };

    @media screen and (min-width: 1280px) {
      top: 40px;
      right: 40px;
      width: 44px;
      height: 44px;
    }

    &:hover,
    :focus {
        background-color: ${props => props.theme.colors.green};
        stroke: ${props => props.theme.colors.bgMain};
    }
`;

export const DeleteIcon = styled(TrashIcon)`
  width: 14px;
  height: 14px;
  display: block;
  margin: 0 auto;
  
  @media screen and (min-width: 768px) {
    width: 22px;
    height: 22px;
  };

  @media screen and (min-width: 1280px) {
    width: 24px;
    height: 24px;
  }
`;
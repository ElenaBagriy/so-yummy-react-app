import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
    padding-top: 64px;
    padding-bottom: 100px;

    @media screen and (min-width: 768px) {
        padding-top: 72px;
    };

    @media screen and (min-width: 1280px) {
        padding-top: 100px;
        padding-bottom: 118px;
    }
`;

export const CategoriesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 32px;

    @media screen and (min-width: 768px) {
        gap: 50px;
    };

    @media screen and (min-width: 1280px) {
        gap: 100px;
    }

`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 24px;
`;

export const Link = styled(NavLink)`
  display: block;
  padding: 10px 24px;
  border-radius: 6px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.bgMain};
  transition: background-color ${props => props.theme.hover.transition};

  &:hover,
  :focus {
    background-color: ${props => props.theme.colors.black};
  }
`;

export const RecipesList = styled.ul`
    display: flex;
    margin-top: 32px;
    flex-wrap: nowrap;

    @media screen and (max-width: 767px) {
      & li:nth-last-child(-n + 3) {
        display: none;
      };
    };

    @media screen and (min-width: 768px) {
        & li:nth-last-child(-n + 2) {
          display: none;
        };
        margin-top: 40px;
        gap: 32px;
    };

    @media screen and (min-width: 1280px) {
        & li:nth-last-child(-n + 2) {
          display: block;
        };
        margin-top: 50px;
        gap: 14px;
    }
`;

export const RecipesItem = styled.li`
    position: relative;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    transition: scale ${props => props.theme.hover.transition}, box-shadow ${props => props.theme.hover.transition};

    &:hover {
        scale: 1.02;
        box-shadow: ${props => props.theme.hover.boxShadow};
    }

    @media screen and (min-width: 768px) {
        width: calc((100% - 32px) / 2);
    };

    @media screen and (min-width: 1280px) {
        width: calc((100% - 3*14px) / 4);

    }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto 0;
  width: 195px;
  height: 46px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  background-color: transparent;
  color: ${props => props.theme.colors.black};
  border-radius: 24px 44px;
  border: 2px solid ${props => props.theme.colors.green};
  transition: color ${props => props.theme.hover.transition}, background-color ${props => props.theme.hover.transition};

  &:hover,
  :focus {
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.bgMain};
  };

    @media screen and (min-width: 768px) {
        margin-top: 32px;
        width: 239px;
        height: 61px;
        font-size: 16px;
    };

    @media screen and (min-width: 1280px) {
        margin-top: 14px;
    }
`;
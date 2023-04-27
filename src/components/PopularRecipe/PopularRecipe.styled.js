import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PopularStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const Title = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.text.primary};
`;

export const RecipesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 23.87px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 33.05px;

    & li:nth-last-child(-n + 2) {
      display: none;
    };
  }

  @media screen and (min-width: 1280px) {
    width: 318px;
    flex-direction: column;
    gap: 23.87px;

    & li:nth-last-child(-n + 2) {
      display: block;
    };
  }
`;

export const RecipeItem = styled.li`
  padding-bottom: 13.13px;
  border-bottom: 1px solid rgb(112, 112, 112, 0.17);
`;

export const Link = styled(NavLink)`
  display: flex;
  height: 85px;
  gap: 12.12px;
  padding-right: 12.9px;
  transition: scale ${props => props.theme.hover.transition}, box-shadow ${props => props.theme.hover.transition};
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    scale: 1.02;
    box-shadow: ${props => props.theme.hover.boxShadow};
  }

  @media screen and (min-width: 768px) {
    gap: 11.76px;
  }

  @media screen and (min-width: 1280px) {
    gap: 11px;
  }
`;

export const Image = styled.img`
  border-radius: 8px;
  width: 104px;
  height: 85px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 102px;
  }

  @media screen and (min-width: 1280px) {
    width: 97px;
  }
`;

export const RecipeTitle = styled.h4`
  max-width: 154px;
  margin-bottom: 3.31px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: ${props => props.theme.text.primary};

  @media screen and (min-width: 768px) {
    max-width: 151px;
  }

  @media screen and (min-width: 768px) {
    max-width: 143px;
  }
`;

export const Description = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: ${props => props.theme.text.popular};
  max-height: 56px;
`;
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
    padding-top: 64px;
`;

export const CategoriesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
`;

export const Item = styled.li`
  &:first-child {
    margin-bottom: 50px;
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
`
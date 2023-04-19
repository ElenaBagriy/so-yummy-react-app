import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFollow = styled.div`
  h3 {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;
    color: ${props => props.theme.text.primary};
  }

  ul {
    display: flex;
    gap: 20px;
  }
`;

export const StyledLink = styled(Link)`
  &:hover,
  &:focus {
    color: #1e1f28;
  }
`;

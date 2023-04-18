import styled from 'styled-components';

export const PopularStyled = styled.div`
  margin-top: 107px;
  color: ${props => props.theme.text.primary};

  h3 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;
  }

  li {
    margin-bottom: 37px;
  }

  img {
    border-radius: 10px;
    width: 97px;
    height: 85px;
    margin-right: 11px;
    object-fit: cover;
  }

  .wrapper {
    display: flex;
  }

  .textWrapper {
    width: 198px;
  }

  h4 {
    margin-bottom: 3.31px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.24px;
  }

  p {
    color: #7e7e7e;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.24px;
  }
`;

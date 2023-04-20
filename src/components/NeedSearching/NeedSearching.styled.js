import styled from 'styled-components';

export const Wrapp = styled.div`
  img {
    width: 100%;
  }
`;
export const Text = styled.p`
  margin-top: 32px;

  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  
  font-size: 14px;
    line-height: 14px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${props => props.theme.text.black};
  opacity: 0.5;
  
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  } ;
`;

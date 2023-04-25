import styled from 'styled-components';

export const StyledPreparation = styled.div`
  h3 {
    margin-top: 100px;
    margin-bottom: 32px;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;
    color: ${props => props.theme.text.primary};
  }

  textarea {
    display: block;
    resize: none;
    width: 505px;
    height: 224px;
    padding: 16px 22.84px;
    margin-bottom: 32px;
    background: #d9d9d9;
    border: none;
    border-radius: 6px;
    color: #000000;
    opacity: 0.5;
  }
`;

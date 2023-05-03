import styled from 'styled-components';

export const StyledPreparation = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    gap: 32px;
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

export const Textarea = styled.textarea`
  display: block;
  resize: none;
  width: 100%;
  height: 154px;
  padding: 9.89px 16px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 6px;
  border: ${props => (props.isError ? '1px solid #e74a3b' : 'none')};
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #000000;

  &::placeholder {
    opacity: 0.5;
  }

  &:focus-visible {
    outline: ${props => (props.isError ? '1px solid #e74a3b' : `props.theme.colors.green auto 1px`)};
}

  @media screen and (min-width: 768px) {
    width: 505px;
    height: 224px;
    padding: 16px 22.84px;
    font-size: 18px;
  }
`;

export const Error = styled.span`
  position: absolute;
  top: 32px;
  left: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  text-align: center;
  color: #e74a3b;

    @media screen and (min-width: 768px) {
      font-size: 12px;
      left: 18px;
      top: 36px;
    }
`;
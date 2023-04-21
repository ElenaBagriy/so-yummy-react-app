import styled from 'styled-components';

export const StyledSubscribeForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 339px;
  color: ${({ theme }) => theme.colors.bgMain};
  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 14px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    margin-bottom: 28px;
  }
`;
export const SubscribeInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledEmailLabel = styled.label`
  position: relative;
`;

export const StyledEmailInput = styled.input`
  display: inline-block;
  width: 100%;
  padding: 18px 50px;
  background-color: transparent;
  /* border: 1px solid ${({ theme }) => theme.colors.bgMain}; */
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.bgMain};
  @media screen and (min-width: 768px) {
    padding: 18px 50px;
  }
`;
export const EmailSVG = styled.svg`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    left: 19px;
  }
`;
export const SubscribeBtn = styled.button`
  text-align: center;
  padding: 14px;
  background: #8baa36;
  border: none;
  border-radius: 6px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: #fafafa;

  @media screen and (min-width: 768px) {
    padding: 18px;
    font-size: 16px;
    line-height: 1.12;
  }
`;

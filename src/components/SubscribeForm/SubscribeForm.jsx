import {
  EmailSVG,
  StyledEmailInput,
  StyledEmailLabel,
  StyledSubscribeForm,
  SubscribeBtn,
  SubscribeInputWrapper,
} from './SubscribeForm.styled';

import spriteSVG from 'images/svg/sprite.svg';

export function SubscribeForm() {
  return (
    <>
      <StyledSubscribeForm>
        <h3>Subscribe to our Newsletter</h3>
        <p>
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </p>
        <SubscribeInputWrapper>
          <StyledEmailLabel>
            <StyledEmailInput placeholder="Enter your email address" />
            <EmailSVG>
              <use href={`${spriteSVG}#icon-mail`} />
            </EmailSVG>
          </StyledEmailLabel>
          <SubscribeBtn type="submit">Subcribe</SubscribeBtn>
        </SubscribeInputWrapper>
      </StyledSubscribeForm>
    </>
  );
}

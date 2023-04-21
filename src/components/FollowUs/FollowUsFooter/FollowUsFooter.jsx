import React from 'react';
import { FollowWrapper, StyledLink, StyledSVG } from './FollowUsFooter.styled';
import sprite from 'images/svg/sprite.svg';

export const FollowUsFooter = () => {
  return (
    <FollowWrapper>
      <ul>
        <li>
          <StyledLink to="https://www.facebook.com/" target="_blank">
            <StyledSVG>
              <use href={`${sprite}#icon-facebook`} />
            </StyledSVG>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="https://www.youtube.com/" target="_blank">
            <StyledSVG>
              <use href={`${sprite}#icon-youtube`} />
            </StyledSVG>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="https://www.twitter.com/" target="_blank">
            <StyledSVG>
              <use href={`${sprite}#icon-twitter`} />
            </StyledSVG>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="https://www.instagram.com" target="_blank">
            <StyledSVG>
              <use href={`${sprite}#icon-instagram`} />
            </StyledSVG>
          </StyledLink>
        </li>
      </ul>
    </FollowWrapper>
  );
};

import React from 'react';
import { FollowWrapper, StyledLink } from './FollowUsFooter.styled';
import sprite from 'images/svg/sprite.svg';

export const FollowUsFooter = () => {
  return (
    <FollowWrapper>
      <ul>
        <li>
          <StyledLink to="https://www.facebook.com/" target="_blank">
            <svg width="26" height="26">
              <use href={`${sprite}#icon-facebook`} />
            </svg>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="https://www.youtube.com/" target="_blank">
            <svg width="28" height="22">
              <use href={`${sprite}#icon-youtube`} />
            </svg>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="https://www.twitter.com/" target="_blank">
            <svg width="25" height="22">
              <use href={`${sprite}#icon-twitter`} />
            </svg>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="https://www.instagram.com" target="_blank">
            <svg width="24" height="24">
              <use href={`${sprite}#icon-instagram`} />
            </svg>
          </StyledLink>
        </li>
      </ul>
    </FollowWrapper>
  );
};

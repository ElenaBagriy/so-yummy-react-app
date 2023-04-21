import React from 'react';
import {
  FacebookSVG,
  FollowWrapper,
  InstagrambeSVG,
  StyledLink,
  TwitterbeSVG,
  YoutubeSVG,
} from './FollowUsFooter.styled';
import sprite from 'images/svg/sprite.svg';

export const FollowUsFooter = () => {
  return (
    <FollowWrapper>
      <ul>
        <li>
          <StyledLink to="https://www.facebook.com/" target="_blank">
            <FacebookSVG>
              <use href={`${sprite}#icon-facebook`} />
            </FacebookSVG>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="https://www.youtube.com/" target="_blank">
            <YoutubeSVG>
              <use href={`${sprite}#icon-youtube`} />
            </YoutubeSVG>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="https://www.twitter.com/" target="_blank">
            <TwitterbeSVG>
              <use href={`${sprite}#icon-twitter`} />
            </TwitterbeSVG>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="https://www.instagram.com" target="_blank">
            <InstagrambeSVG>
              <use href={`${sprite}#icon-instagram`} />
            </InstagrambeSVG>
          </StyledLink>
        </li>
      </ul>
    </FollowWrapper>
  );
};

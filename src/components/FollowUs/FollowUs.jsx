import React from 'react';
import { StyledFollow } from './FollowUs.styled';
import sprite from '../../images/FollowUs/symbol-defs.svg';
import { Link } from 'react-router-dom';

export const FollowUs = ({title = true}) => {
  return (
    <StyledFollow>
      {title && <h3>Follow us</h3>}
      <ul>
        <li>
          <Link to="https://www.facebook.com/" target="_blank">
            <svg width="26" height="26" fill="#8BAA36">
              <use href={`${sprite}#icon-facebook`} />
            </svg>
          </Link>
        </li>
        <li>
          <Link to="https://www.youtube.com/" target="_blank">
            <svg width="28" height="22" fill="#8BAA36">
              <use href={`${sprite}#icon-youtube`} />
            </svg>
          </Link>
        </li>
        <li>
          <Link to="https://www.twitter.com/" target="_blank">
            <svg width="25" height="22" fill="#8BAA36">
              <use href={`${sprite}#icon-twitter`} />
            </svg>
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com" target="_blank">
            <svg width="24" height="24" fill="#8BAA36">
              <use href={`${sprite}#icon-instagram`} />
            </svg>
          </Link>
        </li>
      </ul>
    </StyledFollow>
  );
};

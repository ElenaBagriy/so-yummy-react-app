import React from 'react';
import ButtonStyled from './ButtonRound.styled';

export default function Button({ children, type, onClick, ...props }) {
  return (
    <ButtonStyled type={type} onClick={onClick} {...props}>
      {children}
    </ButtonStyled>
  );
}

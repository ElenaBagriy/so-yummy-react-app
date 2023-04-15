import React from 'react';
import ButtonStyled from './ButtonRound.styled';

export default function Button({ children, type, onClick }) {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

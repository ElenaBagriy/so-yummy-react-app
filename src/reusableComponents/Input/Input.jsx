import React from 'react';
import InputStyled from './Input.styled';

export default function Input({
  name,
  type,
  value,
  placeholder,
  label,
  onChange,
  ...props
}) {
  return (
    <>
      {label && <label id={name}>{label}</label>}
      <InputStyled
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        {...props}
      />
    </>
  );
}

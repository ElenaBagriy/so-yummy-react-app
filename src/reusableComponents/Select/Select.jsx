import React, { useState, useRef, useEffect } from "react";
import {
  SelectContainer,
  SelectLabelButton,
  DropdownStyle,
  DropdownItem,
  Arrow,
} from "./Select.styled";

export default function Select({ label, values, onChange }) {
  const [currentValue, setCurrentValue] = useState("");
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (!selectRef.current.contains(e.target)) return handleClose(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleValueChange = (value) => {
    setCurrentValue(value);
  };
  const handleChange = (value) => {
    handleValueChange(value);
    if (onChange) onChange(value);
    handleClose();
  };
  return (
    <SelectContainer>
      <SelectLabelButton ref={selectRef} isVisible={open} onClick={handleToggle}>
        {currentValue !== "" ? currentValue : label}
        <Arrow />
      </SelectLabelButton>
      <DropdownStyle className="selectDropdown" isVisible={open}>
        {values.map((value, index) => (
          <DropdownItem
            onClick={() => handleChange(value)}
            active={value === (currentValue || label)}
            key={index}
          >
            {value}
          </DropdownItem>
        ))}
      </DropdownStyle>
    </SelectContainer>
  );
}
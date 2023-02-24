import { Input } from '@material-tailwind/react';
import type { InputProps } from '@material-tailwind/react';
import React from 'react';

const CustomInput: React.FC<InputProps> = ({
  label,
  name,
  value,
  color,
  variant,
  onChange,
}) => {
  return (
    <Input
      variant={variant}
      color={color}
      value={value}
      label={label}
      name={name}
      onChange={onChange}
    />
  );
};

export default CustomInput;

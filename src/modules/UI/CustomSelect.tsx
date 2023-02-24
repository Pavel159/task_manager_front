import { Select, Option } from '@material-tailwind/react';
import React from 'react';

interface SelectProps {
  onChange?: (e: any) => void;
  label: string;
  variant: any;
  options: Array<string>;
  value?: string;
}

const CustomSelect: React.FC<SelectProps> = ({
  onChange,
  label,
  variant,
  options,
  value,
}) => {
  return (
    <Select onChange={onChange} variant={variant} label={label} value={value}>
      {options?.map((option) => (
        <Option value={option} key={option}>
          {option}
        </Option>
      ))}
    </Select>
  );
};

export default CustomSelect;

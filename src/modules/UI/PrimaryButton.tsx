import Button from '@material-tailwind/react/components/Button';
import type { ButtonProps } from '@material-tailwind/react';
import React from 'react';

interface CustomButtonProps extends ButtonProps {
  styles?: string;
}

const PrimaryButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  styles,
  variant,
  color,
}) => {
  return (
    <Button
      className={styles}
      onClick={onClick}
      variant={variant}
      color={color}>
      {children}
    </Button>
  );
};

export default PrimaryButton;

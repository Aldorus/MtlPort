import React from 'react';
import { Button as ButtonDS, ButtonProps as ButtonPropsDS } from 'antd';

export type ButtonProps = ButtonPropsDS;

export const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonDS {...props} />;
};

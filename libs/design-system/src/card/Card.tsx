import React from 'react';
import { Card as CardDS, CardProps as CardPropsDS } from 'antd';

export type CardProps = CardPropsDS;

export const Card: React.FC<CardProps> = (props) => {
  return <CardDS {...props} />;
};

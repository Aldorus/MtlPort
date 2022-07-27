import React from 'react';
import { BEMClassName } from '@mtlport/react-lib';
import { BoatList } from '../organism/BoatList';
import { Typography } from 'antd';
import './_Dashboard.scss';

export type DashboardProps = React.HTMLProps<HTMLDivElement>;
export const DashboardPage: React.FC<DashboardProps> = ({ ...props }) => {
  const namespace = BEMClassName(DashboardPage, props.className);
  return (
    <article
      data-testid={DashboardPage.displayName}
      {...props}
      className={namespace.blocksNames()}
    >
      <Typography.Title level={2}>Dashboard</Typography.Title>
      <BoatList />
    </article>
  );
};
DashboardPage.displayName = 'Dashboard';

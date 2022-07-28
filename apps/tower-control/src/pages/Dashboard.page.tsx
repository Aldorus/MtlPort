import React from 'react';
import { BEMClassName } from '@mtlport/react-lib';
import { Typography } from 'antd';
import './_DashboardPage.scss';
import { PortStatusOrganism } from '../organism/PortStatusOrganism';
import { BoatListOrganism } from '../organism/BoatListOrganism';
import { PriorityContainerOrganism } from '../organism/PriorityContainerOrganism';

export type DashboardProps = React.HTMLProps<HTMLDivElement>;
export const DashboardPage: React.FC<DashboardProps> = ({ ...props }) => {
  const namespace = BEMClassName(DashboardPage, props.className);
  return (
    <article
      data-testid={DashboardPage.displayName}
      {...props}
      className={namespace.blocksNames()}
    >
      <Typography.Title level={1}>Dashboard</Typography.Title>
      <Typography.Text>Here you can visualize the boats and containers in the port</Typography.Text>
      <Typography.Title level={2}>Boats</Typography.Title>
      <Typography.Text>Arrived or incoming boats (estimated to arrive in less than 2 days)</Typography.Text>
      <BoatListOrganism />
      <Typography.Title level={2}>Port</Typography.Title>
      <Typography.Text>Overview of the containers in the port</Typography.Text>
      <PortStatusOrganism />
      <Typography.Text>Fastest containers to pick from port, these containers contain either food and medical supply </Typography.Text>
      <PriorityContainerOrganism />
    </article>
  );
};
DashboardPage.displayName = 'Dashboard';

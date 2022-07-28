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
      <Typography.Title level={2}>Boats</Typography.Title>
      <BoatListOrganism />
      <Typography.Title level={2}>Port</Typography.Title>
      <Typography.Title level={3}>
        Containers currently in port
      </Typography.Title>
      <PortStatusOrganism />
      <Typography.Title level={3}>
        Fastest containers to pick from port
      </Typography.Title>
      <PriorityContainerOrganism />
    </article>
  );
};
DashboardPage.displayName = 'Dashboard';

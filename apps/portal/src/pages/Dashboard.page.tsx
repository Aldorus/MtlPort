import React from 'react';
import { BEMClassName } from '@mtlport/react-lib';
import { useGetBoatsQuery } from '@mtlport/schema';
import {Card} from "@mtlport/design-system";

export type DashboardProps = React.HTMLAttributes<HTMLElement>;
export const Dashboard: React.FC<DashboardProps> = ({ ...props }) => {
  const { data } = useGetBoatsQuery();
  const namespace = BEMClassName(Dashboard, props.className);
  return (
    <div
      data-testid={Dashboard.displayName}
      {...props}
      className={namespace.blocksNames()}
    >
      {data?.boats.map((b) => <Card title={b.name} extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>)}
    </div>
  );
};
Dashboard.displayName = 'Dashboard';

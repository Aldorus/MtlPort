import React from 'react';
import { BEMClassName } from '@mtlport/react-lib';
import { useGetBoatsQuery } from '@mtlport/schema';
import { Card } from '@mtlport/design-system';
import { Link, useNavigate } from 'react-router-dom';
import './_BoatList.scss';

export type BoatListProps = React.HTMLProps<HTMLDivElement>;
export const BoatList: React.FC<BoatListProps> = ({ ...props }) => {
  const namespace = BEMClassName(BoatList, props.className);
  const navigate = useNavigate();
  const { data } = useGetBoatsQuery();
  return (
    <article
      data-testid={BoatList.displayName}
      {...props}
      className={namespace.blocksNames()}
    >
      {data?.boats.map((boat) => (
        <Card
          title={boat.name}
          key={boat.id}
          className={namespace.elementNames('item')}
          extra={<Link to={`boat/${boat.id}`}>More</Link>}
        >
          <div>Number of containers: {boat.containerCount}</div>
          <div>Status: {boat.transitStatus}</div>
          <div>Estimated TOA: {boat.timeOfArrival}</div>
        </Card>
      ))}
    </article>
  );
};
BoatList.displayName = 'BoatList';

import React from 'react';
import { BEMClassName } from '@mtlport/react-lib';
import { Card } from '@mtlport/design-system';
import { Link } from 'react-router-dom';
import './_BoatCardMolecule.scss';
import { Tooltip } from 'antd';
import { Boat } from '@mtlport/schema';

export type BoatCardMoleculeProps = React.HTMLProps<HTMLDivElement> & {
  boat: Boat;
};
export const BoatCardMolecule: React.FC<BoatCardMoleculeProps> = ({
  boat,
  ...props
}) => {
  const namespace = BEMClassName(BoatCardMolecule, props.className);
  return (
    <Card
      title={boat.name}
      key={boat.id}
      className={namespace.elementNames('item')}
      extra={<Link to={`boat/${boat.id}/${boat.name}`}>More</Link>}
    >
      <div>Number of containers: {boat.containerCount}</div>
      <div>Status: {boat.transitStatus}</div>
      {boat.transitStatus === 'incoming' && (
        <div>
          Estimated{' '}
          <Tooltip title="Time of arrival">
            <strong>TOA</strong>
          </Tooltip>
          : {boat.timeOfArrival} days
        </div>
      )}
    </Card>
  );
};
BoatCardMolecule.displayName = 'BoatCardMolecule';

import React from 'react';
import { BEMClassName } from '@mtlport/react-lib';
import { useGetContainerQuery } from '@mtlport/schema';
import { Card } from '@mtlport/design-system';
import './_PortStatusOrganism.scss';

export type PortStatusOrganismProps = React.HTMLProps<HTMLDivElement>;
export const PortStatusOrganism: React.FC<PortStatusOrganismProps> = ({
  ...props
}) => {
  const namespace = BEMClassName(PortStatusOrganism, props.className);
  const { data } = useGetContainerQuery();
  return (
    <div className={namespace.blocksNames()}>
      <Card
        className={namespace.elementNames('widget')}
        title="Containers with Food"
      >
        {data?.containers.filter((container) => container.hasFood).length}
      </Card>
      <Card
        className={namespace.elementNames('widget')}
        title="Containers with Medical"
      >
        {data?.containers.filter((container) => container.hasMedical).length}
      </Card>
      <Card
        className={namespace.elementNames('widget')}
        title="Other containers"
      >
        {
          data?.containers.filter(
            (container) => !container.hasFood && container.hasMedical
          ).length
        }
      </Card>
    </div>
  );
};
PortStatusOrganism.displayName = 'PortStatusOrganism';

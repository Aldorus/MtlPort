import React from 'react';
import { BEMClassName } from '@mtlport/react-lib';
import { useGetContainerQuery } from '@mtlport/schema';
import './_PriorityContainerOrganism.scss';
import { ContainerListOrganism } from './ContainerListOrganism';
import { sort } from 'fast-sort';

export type PriorityContainerOrganismProps = React.HTMLProps<HTMLDivElement>;
export const PriorityContainerOrganism: React.FC<
  PriorityContainerOrganismProps
> = ({ ...props }) => {
  const namespace = BEMClassName(PriorityContainerOrganism, props.className);
  const { data } = useGetContainerQuery();
  const top10containers =
    data?.containers.filter(
      (container) =>
        !container.boat && container.hasFood && container.hasMedical
    ).splice(0, 10) ?? [];
  const sortByTimeToLoad = sort(top10containers).asc('timeToLoad');

  return (
    <div className={namespace.blocksNames()}>
      <ContainerListOrganism
        containers={sortByTimeToLoad}
        highlightedInformation={'timeToLoad'}
      />
    </div>
  );
};
PriorityContainerOrganism.displayName = 'PriorityContainerOrganism';

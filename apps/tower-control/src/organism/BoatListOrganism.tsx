import React from 'react';
import { BEMClassName } from '@mtlport/react-lib';
import { Boat, useGetBoatsQuery } from '@mtlport/schema';
import { sort } from 'fast-sort';
import './_BoatListOrganism.scss';
import { BoatCardMolecule } from '../molecules/BoatCard.molecule';

export type BoatListOrganismProps = React.HTMLProps<HTMLDivElement>;
export const BoatListOrganism: React.FC<BoatListOrganismProps> = ({
  ...props
}) => {
  const namespace = BEMClassName(BoatListOrganism, props.className);
  const { data } = useGetBoatsQuery();

  return (
    <article
      data-testid={BoatListOrganism.displayName}
      {...props}
      className={namespace.blocksNames()}
    >
      {sort<Boat>(data?.boats || [])
        .asc((boat) => boat.timeOfArrival || -1)
        .map((boat) => (
          <BoatCardMolecule boat={boat} key={boat.id} />
        ))}
    </article>
  );
};
BoatListOrganism.displayName = 'BoatListOrganism';

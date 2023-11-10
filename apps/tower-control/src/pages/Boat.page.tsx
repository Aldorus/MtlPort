import React from 'react';
import { Typography } from 'antd';
import { BEMClassName } from '@mtlport/react-lib';
import { useParams } from 'react-router-dom';
import { Container, useGetContainerQuery } from '@mtlport/schema';
import './_BoatPage.scss';
import { Button } from '@mtlport/design-system';
import { sort } from 'fast-sort';
import {ContainerListOrganism} from "../organism/ContainerListOrganism";

export type BoatPageProps = React.HTMLProps<HTMLDivElement>;
export const BoatPagePage: React.FC<BoatPageProps> = ({ ...props }) => {
  const namespace = BEMClassName(BoatPagePage, props.className);
  const [isSortedByPriority, setSortedByPriority] =
    React.useState<boolean>(false);
  const { data } = useGetContainerQuery();
  const { boatId } = useParams();

  // These are business rules, we should implement them in a separated lib
  const sortContainersByPriority = (containers: Container[]): Container[] =>
    sort(containers).desc([(u) => u.hasMedical, (u) => u.hasFood]);
  const getContainers = () => {
    const containers: Container[] =
      data?.containers.filter(
        (container: Container) => container?.boat?.id === boatId
      ) || [];
    return isSortedByPriority
      ? sortContainersByPriority(containers)
      : containers;
  };

  return (
    <article
      data-testid={BoatPagePage.displayName}
      {...props}
      className={namespace.blocksNames()}
    >
      <Typography.Title level={2}>BoatPage</Typography.Title>
      <br />
      <Button onClick={() => setSortedByPriority(!isSortedByPriority)}>
        Prioritize container
      </Button>
      <br />
      <br />
      <ContainerListOrganism containers={getContainers()}/>
    </article>
  );
};
BoatPagePage.displayName = 'BoatPage';

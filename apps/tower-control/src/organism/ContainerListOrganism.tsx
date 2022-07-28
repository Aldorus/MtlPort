import React from 'react';
import { BEMClassName } from '@mtlport/react-lib';
import './_ContainerListOrganism.scss';
import { Container } from '@mtlport/schema';
import { List, Tooltip, Typography } from 'antd';

export type ContainerListOrganismProps = React.HTMLProps<HTMLDivElement> & {
  containers: Container[];
  highlightedInformation?: 'priority' | 'timeToLoad';
};
export const ContainerListOrganism: React.FC<ContainerListOrganismProps> = ({
  containers,
  highlightedInformation = 'priority',
  ...props
}) => {
  const namespace = BEMClassName(ContainerListOrganism, props.className);

  const calculatePriority = (container: Container): 1 | 2 | 3 => {
    return container.hasMedical && container.hasFood
      ? 1
      : container.hasFood || container.hasMedical
      ? 2
      : 3;
  };

  return (
    <div className={namespace.blocksNames()}>
      <List
        header={`Container List ${containers.length}`}
        bordered
        dataSource={containers}
        renderItem={(container: Container) => (
          <List.Item className={namespace.elementNames('item')}>
            {highlightedInformation === 'priority' && (
              <div>Priority {calculatePriority(container)}</div>
            )}
            {highlightedInformation === 'timeToLoad' && (
              <div>
                <Tooltip title="Time to load">
                  <strong>TTL</strong>
                </Tooltip>
                &nbsp;{container.timeToLoad}hours
              </div>
            )}
            <Typography.Text mark>[{container.id}]</Typography.Text>
            <div>Has medical: {container.hasMedical ? 'Yes' : 'No'}</div>
            <div>Has food: {container.hasFood ? 'Yes' : 'No'}</div>
          </List.Item>
        )}
      />
    </div>
  );
};
ContainerListOrganism.displayName = 'ContainerListOrganism';
